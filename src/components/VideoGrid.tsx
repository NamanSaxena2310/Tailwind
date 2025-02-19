import React from 'react'
import VideoCard from './VideoCard'

const VIDEOS = [{
  title : "How to learn coding in 30 days | 30 days plan | Code with me ",
   image :"/thumbnail.jpg" ,
   author:"Naman Saxena ",
   timestamp: "13 days ago",
   views:"10M"
},
{
  title : "How to learn coding in 30 days | 30 days plan | Code with me ",
   image :"/thumbnail.jpg" ,
   author:"Naman Saxena ",
   timestamp: "13 days ago",
   views:"10M"
},
{
  title : "How to learn coding in 30 days | 30 days plan | Code with me ",
   image :"/thumbnail.jpg" ,
   author:"Naman Saxena ",
   timestamp: "13 days ago",
   views:"10M"
},
{
  title : "How to learn coding in 30 days | 30 days plan | Code with me ",
   image :"/thumbnail.jpg" ,
   author:"Naman Saxena ",
   timestamp: "13 days ago",
   views:"10M"
},
{
  title : "How to learn coding in 30 days | 30 days plan | Code with me ",
   image :"/thumbnail.jpg" ,
   author:"Naman Saxena ",
   timestamp: "13 days ago",
   views:"10M"
},
{
  title : "How to learn coding in 30 days | 30 days plan | Code with me ",
   image :"/thumbnail.jpg" ,
   author:"Naman Saxena ",
   timestamp: "13 days ago",
   views:"10M"
},
{
  title : "How to learn coding in 30 days | 30 days plan | Code with me ",
   image :"/thumbnail.jpg" ,
   author:"Naman Saxena ",
   timestamp: "13 days ago",
   views:"10M"
},
{
  title : "How to learn coding in 30 days | 30 days plan | Code with me ",
   image :"/thumbnail.jpg" ,
   author:"Naman Saxena ",
   timestamp: "13 days ago",
   views:"10M"
}

]

function VideoGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      {VIDEOS.map(video => <div className='ml-2 mr-2'>
        <VideoCard 
        title = {video.title} image ={video.image} author={video.author} timestamp={video.timestamp} views ={video.views} />

        
      </div>)}
    </div>
  )
}

export default VideoGrid
