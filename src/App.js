import { useEffect, useState } from "react"
import { collection, Collection, getDocs } from 'firebase/firestore'
import { db } from './Components/FireBase'
import { Navbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { Home } from './Components/Home'
import { Shop } from './Components/Shop'
import { Featured } from './Components/Featured'
import { Route,Routes } from 'react-router-dom'
import { Product } from './Components/Product'
import { Bag } from './Components/Bag'

const App = () => {
  const [arrayEarphone, setArrayEarphone] = useState([ { id:'e10', name:'Boat E' , des:'Earphone 1 ',price:'1452',img:'https://knowtechie.com/wp-content/uploads/2022/02/tribit-bluetooth-speaker-main-1000x600.jpg' } ,{ id:'e1', name:'Boat E' , des:'Earphone 1 ',price:'1452' } ,{ id:'e99', name:'Boat E' , des:'Earphone 1 ',price:'1452' },{ id:'e2', name:'Boat E' , des:'Earphone 1 ',price:'1452' } ])
  const [arraySpeaker, setArraySpeaker] = useState([ { id:'s10', name:'Boat s' , des:'Speaker 2',price:'1652' } ])
  const [ product ,setProduct ] = useState({})
  const [ bag, setBag ] = useState([ ])


    const collectionFirebase = collection( db , 'Headphone' )
    const collectionFirebase1 = collection( db , 'Speaker' )


    useEffect( ()=>{

      const getData= async()=>{
        const data  = await getDocs( collectionFirebase )
        setArrayEarphone( data.docs.map( a=> ({ ...a.data() } ) ) )

        const data1  = await getDocs( collectionFirebase1 )
        setArraySpeaker( data1.docs.map( a=> ({ ...a.data() } ) ) )
      }
      getData()
    } ,[arrayEarphone , arraySpeaker] )

    const selectedProduct=(id)=>{
       const obj = arrayEarphone.find( a=> a.id===id )
       const obj1 = arraySpeaker.find( a=> a.id===id )
       
        obj=== undefined ? setProduct( ()=> obj1 ) : setProduct( ()=>obj  )
    }

    const addtocart=()=>{
      setBag( [...bag , product ] )
    }

  return (
    <>
      <div>
          
          <Navbar/>

          <Routes>
            
            <Route path='/home' element={ <Home arrayEarphone={arrayEarphone} arraySpeaker={arraySpeaker} selectedProduct={selectedProduct} /> } />
            <Route path='/shop' element={<Shop arrayEarphone={arrayEarphone} arraySpeaker={arraySpeaker} selectedProduct={selectedProduct} />}  />
            <Route path='/featured' element={ <Featured arrayEarphone={arrayEarphone} arraySpeaker={arraySpeaker} selectedProduct={selectedProduct}/>} />
            <Route path="/product" element={ < Product product={product} addtocart={addtocart}/> } />
            <Route path="/bag" element={ < Bag bag={bag}/> } />

          </Routes>

          <Footer />

      </div>

    </>
  )

}

export default App
