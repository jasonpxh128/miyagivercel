import React, {useRef, useContext, useCallback} from 'react'
import { SizeContext } from './SIze-observer'
import useAnimationFrame from './use-animation-frame'

interface Props {
  initialOffsetX: number
  className: string
  contentWidth: number
  children: React.ReactNode;


}

const SliderContainer: React.FC<Props> = ({children, initialOffsetX, className, contentWidth }) => {
  const {innerWidth} = useContext(SizeContext)
  const refScrollX = useRef<number>(initialOffsetX)
  const refContainer = useRef<HTMLDivElement>(null)
  const refContent = useRef<HTMLDivElement>(null)
  const enabled = innerWidth <contentWidth

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const{current:elcontainer} = refContainer
      const{current:elcontent} = refContent
      if (elcontainer && elcontent){
        refScrollX.current += 0.5
        elcontainer.scrollLeft = refScrollX.current
        if (elcontainer.scrollLeft>= elcontent.clientWidth){
          refScrollX.current = 0
          elcontainer.scrollLeft = 0
        }
      }
    },[])

  )
return(
  <div ref={refContainer} className={` slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}`}>
    <div ref={refContent} className='inline-block'>
      {children}
    </div>
      {/* <div className={enabled ? 'inline-block' : 'hidden'}>
        {children}
      </div> */}
  </div>
)

}

export default SliderContainer