import { useEffect, useRef } from 'react'

const ViewportVideo = ({ src, type = 'video/mp4', ...props }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current

    if (!video) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '150px 0px', threshold: 0.01 },
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
      video.pause()
    }
  }, [])

  return (
    <video ref={videoRef} preload="metadata" {...props}>
      <source src={src} type={type} />
    </video>
  )
}

export default ViewportVideo
