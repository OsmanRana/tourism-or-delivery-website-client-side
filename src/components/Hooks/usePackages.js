import { useEffect, useState } from "react"

const usePackages = () => {
    const [packages, setPackages] = useState([]);
    const [islLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://radiant-earth-20543.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
        setIsLoading(false)
    }, []);

    return {
        packages,
        islLoading,
        setPackages
    }
};

export default usePackages;