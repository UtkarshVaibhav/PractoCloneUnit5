import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AppointmentCard } from './AppointmentCard';


export const AppoinmentSlider = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1000, min: 500 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 500, min: 0 },
          items: 4
        }
      };

    return (
        <div >
            <Carousel responsive={responsive}>
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg" title="Dentist" sub="Teething troubles? Schedule a dental checkup" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg" title="Gynecologist/Obstetrician" sub="Explore for women's health, pregnancy and infertility treatments" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg" title="Dietitian/Nutrition" sub="Get guidance on eating right, weight management and sports nutrition" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg" title="Physiotherapist" sub="Pulled a muscle? Get it treated by a trained physiotherapist" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg" title="General surgeon" sub="Need to get operated? Find the right surgeon" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg" title="Orthopedist" sub="For Bone and Joints issues, spinal injuries and more" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg" title="General physician" sub="Find the right family doctor in your neighborhood" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-pediatrician@2x.jpg" title="Pediatrician" sub="Child Specialists and Doctors for Infant" />
                <AppointmentCard image="https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gastroenterologist@2x.jpg" title="Gastroenterologist" sub="Explore for issues related to digestive system, liver and pancreas" />
            </Carousel>
        
        </div>
    );
}