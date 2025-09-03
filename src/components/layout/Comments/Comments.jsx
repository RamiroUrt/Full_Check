import AngleBox from '@/components/ui/AngleBox'
import Whell from "@/assets/img/wheel.jpg";
import Image from "next/image"
import Car from '../../../assets/img/car-png/pulse-slider.png';
import CardComment from '@/components/ui/CardComment/CardComment';
const CommentsContain = () => {
  return (
    <>
    <section className='comments-contain'>
    <div className="comment-card-contain">
      <CardComment />
    </div>
          <div className="comment-back">
            <div className="comment-back-left">
              <div className="box-contain-comments">
                  <AngleBox
                  color="#fe7630"
                  image={Car}/>
              </div>
            </div>
              <div className="comment-back-rigth">
                <div className="tire-highlight">
                            <Image loading="lazy" src={Whell} alt="Logo" className="footer-wheel"/>
                </div>
              </div>
          </div>
    </section>
    </>
  )
}

export default CommentsContain