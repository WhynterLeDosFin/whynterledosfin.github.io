import React, { useEffect, useRef, useCallback } from "react";
import styles from "./cssModules/Carrousel.module.scss";
import type { Technology } from "./Works";

interface CarrouselProps {
    items: Technology[];
    onSelect: (item: Technology) => void;
}

const FRICTION = 0.94;
const SNAP_STRENGTH = 0.1;

const Carrousel: React.FC<CarrouselProps> = ({ items, onSelect }) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);

    const translateX = useRef(0);
    const velocity = useRef(0);
    const lastX = useRef(0);
    const isDragging = useRef(false);
    const raf = useRef<number | null>(null);

    const loopWidth = useRef(0);
    const itemWidth = useRef(0);

    const loopItems = [...items, ...items, ...items];

    const updateDepth = useCallback(() => {
        if (!wrapperRef.current || !trackRef.current) return;

        const w = wrapperRef.current.getBoundingClientRect();
        const centerX = w.left + w.width / 2;
        const maxDist = w.width * 0.48;

        Array.from(trackRef.current.children).forEach((el) => {
            const r = (el as HTMLElement).getBoundingClientRect();
            const elementCenterX = r.left + r.width / 2;
            const d = Math.abs(centerX - elementCenterX);
            const ratio = Math.min(d / maxDist, 1);

            const scale = 1 - Math.pow(ratio, 3) * 0.25;
            const opacity = 1 - Math.pow(ratio, 4);

            const e = el as HTMLElement;
            e.style.transform = `scale(${scale})`;
            e.style.opacity = opacity.toString();
            e.style.zIndex = Math.round((1 - ratio) * 100).toString();

            if (ratio >= 0.99) {
                e.style.visibility = 'hidden';
            } else {
                e.style.visibility = 'visible';
            }
        });
    }, []);

    const applyLoop = useCallback(() => {
        if (!trackRef.current || loopWidth.current === 0) return;

        const width = loopWidth.current;
        const wrapperWidth = wrapperRef.current?.offsetWidth || 0;
        const centerPos = -width - (width / 2) + (wrapperWidth / 2);
        const safeBuffer = (3 * width - wrapperWidth) / 2;
        const threshold = Math.min(width / 2, safeBuffer * 0.9);

        let jumped = false;
        if (translateX.current < centerPos - threshold) {
            translateX.current += width;
            jumped = true;
        } else if (translateX.current > centerPos + threshold) {
            translateX.current -= width;
            jumped = true;
        }

        if (jumped) {
            trackRef.current.style.transition = 'none';
            trackRef.current.style.transform = `translate3d(${translateX.current}px,0,0)`;
            void trackRef.current.offsetHeight;
        } else {
            trackRef.current.style.transform = `translate3d(${translateX.current}px,0,0)`;
        }

        updateDepth();
    }, [updateDepth]);

    const getClosestSnapPos = () => {
        if (!wrapperRef.current || !trackRef.current || itemWidth.current === 0) return translateX.current;

        const wWidth = wrapperRef.current.offsetWidth;
        const width = loopWidth.current;
        const offsetFromStart = translateX.current + width + (width/2) - (wWidth/2);
        const itemIndex = Math.round(offsetFromStart / itemWidth.current);

        return -width - (width/2) + (wWidth/2) + (itemIndex * itemWidth.current);
    };

    const animate = () => {
        if (isDragging.current) return;

        translateX.current += velocity.current;
        velocity.current *= FRICTION;

        if (Math.abs(velocity.current) < 0.5) {
            const snapPos = getClosestSnapPos();
            const diff = snapPos - translateX.current;
            translateX.current += diff * SNAP_STRENGTH;

            if (Math.abs(diff) < 0.1 && Math.abs(velocity.current) < 0.01) {
                translateX.current = snapPos;
                velocity.current = 0;
                applyLoop();
                raf.current = null;
                return;
            }
        }

        applyLoop();
        raf.current = requestAnimationFrame(animate);
    };

    const centerItem = (index: number) => {
        if (!wrapperRef.current || itemWidth.current === 0) return;

        const wWidth = wrapperRef.current.offsetWidth;
        const targetX = (wWidth / 2) - (index * itemWidth.current + itemWidth.current / 2);
        velocity.current = 0;
        const startX = translateX.current;
        const dist = targetX - startX;
        let start: number | null = null;
        const duration = 600;

        const step = (timestamp: number) => {
            if (!start) start = timestamp;

            const progress = Math.min((timestamp - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            translateX.current = startX + dist * ease;
            applyLoop();

            if (progress < 1) {
                raf.current = requestAnimationFrame(step);
            } else {
                raf.current = null;
            }
        };

        if (raf.current) cancelAnimationFrame(raf.current);
        raf.current = requestAnimationFrame(step);
    };

    const onPointerDown = (e: React.PointerEvent) => {
        isDragging.current = true;
        lastX.current = e.clientX;
        velocity.current = 0;
        if (raf.current) cancelAnimationFrame(raf.current);
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!isDragging.current) return;

        const dx = e.clientX - lastX.current;
        lastX.current = e.clientX;

        translateX.current += dx;
        velocity.current = dx;

        applyLoop();
    };

    const onPointerUp = () => {
        isDragging.current = false;
        raf.current = requestAnimationFrame(animate);
    };

    const onWheel = useCallback((e: WheelEvent) => {
        e.preventDefault();
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        velocity.current += delta * -0.3;
        if (!raf.current) raf.current = requestAnimationFrame(animate);
    }, []);

    const playIntroAnimation = () => {
        velocity.current = -20 - Math.random() * 10;
        if (!raf.current) raf.current = requestAnimationFrame(animate);
    };

    const initDimensions = useCallback(() => {
        if (!trackRef.current || !wrapperRef.current) return;

        const children = Array.from(trackRef.current.children) as HTMLElement[];
        if (children.length === 0) return;

        const first = children[0];
        const second = children[1];
        const firstRect = first.getBoundingClientRect();
        const secondRect = second.getBoundingClientRect();

        itemWidth.current = secondRect.left - firstRect.left;
        loopWidth.current = itemWidth.current * items.length;

        const wrapperWidth = wrapperRef.current.offsetWidth;
        const width = loopWidth.current;

        translateX.current = -width - (width / 2) + (wrapperWidth / 2);

        trackRef.current.style.transform = `translate3d(${translateX.current}px,0,0)`;
        updateDepth();
    }, [items.length, updateDepth]);

    useEffect(() => {
        const timer = setTimeout(() => {
            initDimensions();
        }, 100);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(playIntroAnimation, 400);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (wrapperRef.current) {
            observer.observe(wrapperRef.current);
        }

        const wrapper = wrapperRef.current;
        wrapper?.addEventListener("wheel", onWheel, { passive: false });
        window.addEventListener("resize", initDimensions);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
            wrapper?.removeEventListener("wheel", onWheel);
            window.removeEventListener("resize", initDimensions);
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [initDimensions, onWheel]);

    return (
        <div
            ref={wrapperRef}
            className={styles.carouselWrapper}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
        >
            <div ref={trackRef} className={styles.track}>
                {loopItems.map((item, i) => (
                    <div
                        key={`${item.id}-${i}`}
                        className={styles.item}
                        onClick={() => {
                            if (Math.abs(velocity.current) < 2) {
                                centerItem(i);
                                onSelect(item);
                            }
                        }}
                    >
                        <img src={item.logo} alt={item.name} />
                        <div className={styles.label}>{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carrousel;
