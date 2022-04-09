import React from 'react'
import styles from './DownloadPracto.module.css'

const DownloadPracto = () => {
  return (
    <div class={styles.downloadPracto}>
        <div>
            <img src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png" alt="PractoDoctorImage" width="350px" />
        </div>
        <div>
            <div>
                <h1>Download the Practo app</h1>
                <p>Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.</p>
            </div>
            <div>
                <h4>Get the link to download the app</h4>
                <div>
                    <span>+91</span><input placeholder='Enter Phone Number'/><button className={styles.sms}>Send SMS</button>
                </div>
                <div>
                    <img src="https://th.bing.com/th/id/OIP.cW9T1z-5BVvmO-PaGnc3eAHaCQ?pid=ImgDet&w=564&h=172&rs=1" alt="Google Play" width="135px"/>
                    <img src="https://www.garant-gruppe.de/wp-content/uploads/2018/10/Apple-App-store-Button.png" alt="App Store" width="135px"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default DownloadPracto