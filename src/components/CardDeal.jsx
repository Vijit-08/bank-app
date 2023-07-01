import { card } from "../assets"
import styles , {layout} from "../style"
import Button from "./Button"
const CardDeal = () => (
  
  <section id="product" className={layout.section}>
  
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in few easy steps</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 pb-[25px]`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <Button styles="mt-10px"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
        
    </div>
  </section>
)
export default CardDeal