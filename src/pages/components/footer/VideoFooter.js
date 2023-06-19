import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import {FaCompactDisc} from 'react-icons/fa';

function VideoFooter({nome, descricao, musica}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
        <h3>@{nome}</h3>
        <p>{descricao}</p>
        <div className='videoFooter__music'>
            <MusicNoteIcon className='videoFooter__icon'/>
            <div className='videoFooterMusic__text'>
                <p>{musica}</p>
            </div>
        </div>
    </div>
    <FaCompactDisc fontSize='40' className='videoFooter__record'/>
    
    </div>
  )
}

export default VideoFooter