import React from 'react'
import building from "../icons/Building.png"
const Second = () => {
    return (
        <div className="second__Main">
          <div className="second__Container">
              <div className="image__Container">
                  <img src={building} alt="" />
              </div>

              <header>
                  <p>Morbi arcu ex, vestibulum eget justo vitae, interdum hendrerit lorem. Nulla consectetur vestibulum urna tempus fringilla. Mauris ipsum leo, vehicula vitae mi in, convallis laoreet libero. Proin porttitor, dui aliquam gravida molestie, nibh nulla tincidunt sapien, eget imperdiet dui nunc in purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse iaculis nisi quis facilisis sollicitudin. </p>
              </header>
          </div>
         

        </div>
    )
}

export default Second
