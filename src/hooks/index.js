import axios from 'axios'
import {useState, useEffect} from 'react'

export const useField = (type) => {
    const [value, setValue] = useState('')
    const onChange = ({ target }) => {
        setValue(target.value)
    }

    return {
        type,
        value,
        onChange
    }
}

export const useCountry = (name) => {
    const [country, setCountry] = useState(null)

    useEffect(() => {
        if (name === '') return

        axios
            .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
            .then(r => setCountry(r.data[0]))
            .catch(() => setCountry(null))
    }, [name])

    return country
}