import Key from './Key'
import c from '../sounds/c.mp3'
import cis from '../sounds/cis.mp3'
import d from '../sounds/d.mp3'
import dis from '../sounds/dis.mp3'
import e from '../sounds/e.mp3'
import f from '../sounds/f.mp3'
import fis from '../sounds/fis.mp3'
import g from '../sounds/g.mp3'
import gis from '../sounds/gis.mp3'
import a from '../sounds/a.mp3'
import ais from '../sounds/ais.mp3'
import b from '../sounds/b.mp3'

const Keys = () => {
    
    return (
        <div>           
                <ul className="set">
                <Key name="white c"  note={c}  />
                <Key name="black cis" note={cis}/>
                <Key name="white d" note={d}/>
                <Key name="black dis" note={dis}/>
                <Key name="white e" note={e}/>
                <Key name="white f" note={f}/>
                <Key name="black fis" note={fis}/>
                <Key name="white g" note={g}/>
                <Key name="black gis" note={gis}/>
                <Key name="white a" note={a}/>
                <Key name="black ais" note={ais}/>
                <Key name="white b"  note={b}/>
            </ul>
            
            
        </div>
    )
}

export default Keys
