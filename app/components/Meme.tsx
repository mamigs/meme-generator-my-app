"use client";
import Image from "next/image"
import MemeImage from "../../public/memeimg.png"

export default function Meme(){
    
    

    return(
        <>
        <div className="form">
            <input 
            type="text" 
            placeholder="Top-Text"
            className="form-input"
            name="topText"
           
            
            />
            <input 
            type="text"
            placeholder="Bottom Text"
            className="form-input"
            name="bottom-text"
            
            
            />
            <button className="form-btn">Get a new meme image</button>
            

        </div>
        <div className="meme-result">
            <Image src={MemeImage} alt="Meme image" className="meme-image"/>
         <h2 className="meme-text top">Top-Text</h2>
         <h2 className="meme-text bottom">Bottom Text</h2>
        </div>
        
        </>
    )
}