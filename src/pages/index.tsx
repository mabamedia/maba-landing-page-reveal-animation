import WhiteStar from '@/assets/images/white-star.svg';
import Loader from '@/components/Loader';
import gsap from 'gsap';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const windowWidth = window.innerWidth;
    const wrapperWidth = 180
    const finalPosition = windowWidth - wrapperWidth
    const stepDistance = finalPosition / 6
    const tl = gsap.timeline()

    tl.to('.count', {
      x: -900,
      duration: 0.85,
      delay: 0.5,
      ease: 'power4.inOut'
    })

    for(let i = 1; i <= 6; i++) {
      const xPosition = -900 + i * 180
      tl.to('.count', {
        x: xPosition,
        duration: 0.85,
        ease: 'power4.inOut',
        onStart: () => {
          gsap.to('.count-wrapper', {
            x: stepDistance * i,
            duration: 0.85,
            ease: 'power4.inOut'
          })
        }
      })
    }

    gsap.set('.revealer svg', { scale: 0 })

    const delays = [6, 6.5, 7]

    document.querySelectorAll(".revealer svg").forEach((el, i) => {
      gsap.to(el, {
        scale: 45,
        duration: 1,
        ease: 'power4.inOut',
        delay: delays[i],
        onComplete: () => {
          if (i === delays.length - 1) {
            const loaderElement = document.querySelector('.loader');
            if (loaderElement) {
              loaderElement.remove();
            }
          }
        }
      })

      gsap.to('.header h1', {
        rotateY: 0,
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
        delay: 8,
        onStart: () => {
          gsap.to('.toggle-button', {
            scale: 1,
            duration: 1,
            ease: 'power4.inOut'
          })
          gsap.to('.line p', {
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out'
          })
        }
      })
    })
  }, [])

  return (
    <Loader>
      <div className="site-info absolute top-[2em] left-[2em] flex flex-col gap-[0.125em]">
        <div className="line [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] h-[18px]">
          <p className='relative text-[14px] -tracking-[0.125px] opacity-[0.5] translate-y-[18px] will-change-transform'>Digital Brand Design</p>
        </div>

        <div className="line [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] h-[18px]">
          <p className='relative text-[14px] -tracking-[0.125px] opacity-[0.5] translate-y-[18px] will-change-transform'>Photography and Film Production</p>
        </div>
      </div>

      <div className="toggle-button absolute top-[2em] right-[2em] w-[60px] h-[60px] bg-white rounded-full scale-0">
        <Image src={WhiteStar} width={24} height={24} alt='' className='path-black w-full h-full object-cover scale-[0.5]' />
      </div>

      <div className="header absolute left-0 bottom-0 p-[1em] [transform-style:preserve-3d] [perspective:2000px]">
        <h1 className='relative text-[25vw] leading-[0.85] -tracking-0.02em rotate-y-[60deg] origin-bottom-left will-change-transform opacity-0'>MABA MEDIA</h1>
      </div>
    </Loader>
  );
}
