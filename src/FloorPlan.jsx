import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
import Bedroom from "./Bedroom"
import Bath from "./assets/Bath"


const FloorPlan = () => {
  return ( 
    <div>
      < Kitchen />
      < LivingRoom />
      < Bedroom bedNum={1} />
      < Bedroom bedNum={2} />
      < Bedroom bedNum={3} />
      < Bath />
    </div>
    
  )
}

export default FloorPlan