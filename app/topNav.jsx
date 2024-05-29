import React ,{useCallback} from 'react'
import { useLanguageContext } from './languageContext'
import LanguageToggle from './selectLanguage'
import english from '../public/english.png'
import arabic from '../public/arabic2.png'
import turkish from '../public/turkish.jpg'
export default function TopNav() {


    
    const { language, changeLanguage } = useLanguageContext()


    const selectLanguage = useCallback(
        (language) => {
          switch (language) {
            case 'en':
              changeLanguage('en')
              break
            case 'ar':
              changeLanguage('ar')
            
              break

              case 'tr':
                changeLanguage('tr')
              
                break
            default:
              changeLanguage('en')
              break
          }
        },
        [changeLanguage],
      )



  return (
    <div>


<div className="mr-1 pt-2">
    
          <LanguageToggle
            languages={[
              { label: 'English', value: 'en', img: english },
              { label: 'عربي', value: 'ar', img: arabic },
              { label: 'Turkish', value: 'tr', img: turkish },
            ]}
            selectedLanguage={language}
            selectLanguage={selectLanguage}
          />
        </div>



    </div>
  )
}
