import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useGSAP } from "@gsap/react"
import {openingHours, socials} from "../../constants/index.js"

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact', { type: 'words' })
        
        const timeLine = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
                ease: 'power1.inOut'
            }
        })

        timeLine
        .from(titleSplit.words, {
            opacity: 0, yPercent: 100,stagger: 0.02
        })
        .from('#contact h3, #contact p', {
            opacity: 0, yPercent: 100,stagger: 0.02
        })
    })
  return (
    <footer id="contact">
       

        <div className="content">
            <h2>Where to Find Us</h2>

            <div>
                <h3>Visit Our Bar</h3>
                <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
            </div>

            <div>
                <h3>Contact Us</h3>
                <p>(555) 987-6543</p>
                <p>hello@jsmocktaiil.com</p>
            </div>

            <div>
                <h3>Open Every Day</h3>
                {openingHours.map((item) => (
                    <p key={item.day}>
                        <span>{item.day}</span>
                        <span>{item.time}</span>
                    </p>
                ))}
            </div>

            <div>
                <h3>Socials</h3>

                <div className="flex-center gap-5">
                    {socials.map(({name, icon, url}) => (
                        <a 
                        key={name} 
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        >
                            <img src={icon} alt={name} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Contact