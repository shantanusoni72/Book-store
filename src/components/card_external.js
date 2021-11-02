import React from 'react'
import Fictional from './book/fictional'
import SelfHelp from './book/selfhelp'
import Doc from './book/doc'

export default function card_external(props) {
    return (
        <>
        {
            (props.category == "fictional") ? <Fictional /> : (props.category == "selfhelp") ? <SelfHelp /> : (props.category == "doc") ? <Doc /> : null
        }
        </>
    )
}
