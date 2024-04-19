import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import image1 from '/1.jpg'
import image2 from '/2.jpg'
import image3 from '/3.jpg'
import Accordion from './components/Accordion'
import Alert from './components/Alert'
import Dialog from './components/Dialog'
import Badge from './components/Badge'
import Calendar from './components/Calendar'
import Carousel from './components/Carousel'
const data=[{
  title: "title1",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut iusto delectus magni eos aliquam velit recusandae quos facere? Repudiandae hic dolorem unde voluptatibus minima, quas quam suscipit assumenda veritatis!"
},
{
  title: "title2",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut iusto delectus magni eos aliquam velit recusandae quos facere? Repudiandae hic dolorem unde voluptatibus minima, quas quam suscipit assumenda veritatis!"
}
,
{
  title: "title3",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut iusto delectus magni eos aliquam velit recusandae quos facere? Repudiandae hic dolorem unde voluptatibus minima, quas quam suscipit assumenda veritatis!"
}
]
const dataCarousel=[{
  title: "title1",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut iusto delectus magni eos aliquam velit recusandae quos facere? Repudiandae hic dolorem unde voluptatibus minima, quas quam suscipit assumenda veritatis!",
  image: image1
},
{
  title: "title2",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut iusto delectus magni eos aliquam velit recusandae quos facere? Repudiandae hic dolorem unde voluptatibus minima, quas quam suscipit assumenda veritatis!",
  image: image2
}
,
{
  title: "title3",
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ut iusto delectus magni eos aliquam velit recusandae quos facere? Repudiandae hic dolorem unde voluptatibus minima, quas quam suscipit assumenda veritatis!",
  image: image3
}
]
function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <>
    <h1>My UI Library</h1>
    <div className='block'>
      <h1>Buttons</h1>
    <Button rounded="rounded"  style='primary' content="submit" />
      <Button rounded=""  style='danger' content="delete" />
      <Button rounded="rounded"  style='default' content="default" />

    </div>
    <div className='block'>
      <h1>Cards</h1>
 <div className="cards">
      <Card 
      rounded={'rounded'} 
      bordered={'bordered'} 
      content={'lorem ipsum '}
      title={'title'}  
      image={image1}
      />
         <Card 
      rounded={'rounded'} 
      bordered={''} 
      content={'lorem ipsum '}
      title={'title'}  
      image={image2}
      />
  </div>
  </div>
  <div className="block">
  <h1>Accordion</h1>

<Accordion data={data} />
</div>
<div className="block">
<h1>Alerts</h1>
<Alert title={'title'} content={'content'} />
</div>
<div className="block">
<h1>Dialog</h1>
  <Dialog  title={'title'} content={'content'}/>
</div>
<div className="block">
<h1>Badge</h1>
  <Badge >Badge</Badge>
</div>
<div className="block">
<h1>Calendar</h1>
  <Calendar  value={currentDate} onChange={setCurrentDate} />
</div>  
<div className="block">
<h1>Carousel</h1>
<Carousel data={dataCarousel} />
</div>
    </>
  )
}

export default App
