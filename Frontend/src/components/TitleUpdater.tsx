import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const TitleUpdater: React.FC = () => {
    const location = useLocation()



    useEffect(() => {

        const routeTitles: { [key: string]: string } = {
            '/': 'Home | Fortuny',
            '/shop': 'Shop | Fortuny',
            '/palazzina-2025': 'Palazzina 2025 | Fortuny',
            '/textiles': 'Textiles | Fortuny',
            '/collections': 'Collections | Fortuny',

        }


        document.title = routeTitles[location.pathname] || 'Page Not Found | Fortuny'
    }, [location.pathname])

    return null
}

export default TitleUpdater