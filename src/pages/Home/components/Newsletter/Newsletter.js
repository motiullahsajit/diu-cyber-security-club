import React from 'react'

function Newsletter() {
  return (
    <section>
        <h3>JOIN NEWSLETTER</h3>
        <input name="email" placeholder='Your email address'/>
        <button>SUBSCIBE</button>
        <div>
            <div>
                <h5>VENUE LOCATION</h5>
                <p>NOVEMBER 19, 2022</p>
                <p>Military Institute of Science and Technology (MIST)</p>
            </div>
            <div>
                <h5>SOCIAL CONNECTION</h5>
                <p>You should connect social area for Any update</p>
                <div>
                    facebook, twitter, Youtube
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter