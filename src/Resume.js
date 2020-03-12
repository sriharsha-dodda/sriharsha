import React from 'react';
import data from './data.json';
import icon from './superhero.svg';
//import 'bat.svg';

let Resume=(props)=>{
    let info = Object.values(props.location.index.value);
    console.log(info);
    let person=data.profiles[info];
    console.log(person);
    //var imageName = require(person.basics.imageName);
    return(
        <div className="parent">
            
            <div className="child">
               
                <img src={icon} alt="profile" />
                <h3>{person.basics.name}</h3>
                <a href={"mailto:"+person.basics.email} className="link">{person.basics.email} </a>
                <br></br>
                <a href={"tel:"+person.basics.mobile} className="link">{person.basics.mobile} </a>

            </div>
            <div className="child2">
                <h3> Educational Qualification</h3><hr></hr>
                {person.education.map((i,j)=>(
                    <div key={j} className="skill">
                        <h4>{i.degree}</h4>
                        <ul>
                            <li>{i.percentage+"%"}</li>
                            <li>{i.institute}</li>
                        </ul>
                    </div>

                ))}

                <h3>Skills</h3><hr></hr>
                {person.skills.map((x,y)=>(
                    <div key={y} className="skill">
                        <h4>{x.type}</h4>
                            {x.values.map((k,l)=>(
                                <div>
                                    <li>{k}</li>
                                </div>
                            ))}
                    </div>

                ))}


            </div>
        </div>
    )
}

export default Resume;