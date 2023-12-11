import React from 'react'

export const BuscadorABC = ({onClick}) => {

  const buscarLetra = (letra) => {
    //  console.log("letra: "+letra);
    onClick(letra);
  }

  return (
    <div className='text-center'>
        <ul>
            <li><span id='searchA' onClick={() => buscarLetra("a")} className='searchLetter'>A</span></li>
            <li><span id='searchB' onClick={() => buscarLetra("b")} className='searchLetter'>B</span></li>
            <li><span id='searchC' onClick={() => buscarLetra("c")} className='searchLetter'>C</span></li>
            <li><span id='searchD' onClick={() => buscarLetra("d")}  className='searchLetter'>D</span></li>
            <li><span id='searchE' onClick={() => buscarLetra("e")} className='searchLetter'>E</span></li>
            <li><span id='searchF' onClick={() => buscarLetra("f")} className='searchLetter'>F</span></li>
            <li><span id='searchG' onClick={() => buscarLetra("g")} className='searchLetter'>G</span></li>
            <li><span id='searchH' onClick={() => buscarLetra("h")} className='searchLetter'>H</span></li>
            <li><span id='searchI' onClick={() => buscarLetra("i")} className='searchLetter'>I</span></li>
            <li><span id='searchJ' onClick={() => buscarLetra("j")} className='searchLetter'>J</span></li>
            <li><span id='searchK' onClick={() => buscarLetra("k")} className='searchLetter'>K</span></li>
            <li><span id='searchL' onClick={() => buscarLetra("l")} className='searchLetter'>L</span></li>
            <li><span id='searchM' onClick={() => buscarLetra("m")} className='searchLetter'>M</span></li>
            <li><span id='searchN' onClick={() => buscarLetra("n")} className='searchLetter'>N</span></li>
            <li><span id='searchO' onClick={() => buscarLetra("o")} className='searchLetter'>O</span></li>
            <li><span id='searchP' onClick={() => buscarLetra("p")} className='searchLetter'>P</span></li>
            <li><span id='searchQ' onClick={() => buscarLetra("q")} className='searchLetter'>Q</span></li>
            <li><span id='searchR' onClick={() => buscarLetra("r")} className='searchLetter'>R</span></li>
            <li><span id='searchS' onClick={() => buscarLetra("s")} className='searchLetter'>S</span></li>
            <li><span id='searchT' onClick={() => buscarLetra("t")} className='searchLetter'>T</span></li>
            <li><span id='searchU' onClick={() => buscarLetra("u")} className='searchLetter'>U</span></li>
            <li><span id='searchV' onClick={() => buscarLetra("v")} className='searchLetter'>V</span></li>
            <li><span id='searchW' onClick={() => buscarLetra("w")} className='searchLetter'>W</span></li>
            <li><span id='searchX' onClick={() => buscarLetra("x")} className='searchLetter'>X</span></li>
            <li><span id='searchY' onClick={() => buscarLetra("y")} className='searchLetter'>Y</span></li>
            <li><span id='searchZ' onClick={() => buscarLetra("z")} className='searchLetter'>Z</span></li>
        </ul>
    </div>
  )
}
