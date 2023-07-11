import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import ParentStyles from "../../css/styles.module.css"
import Styles from "./css/styles.module.css"

export default function Example() {
    const questions = [
        {
            id: 1,
            question: `What is NFT?`,
            answer: `NFT(A non funfible token) is a unique digital asset that represent ownership
             of real word items like ad video, cloths, music etc. NFT uses the same blockchain technology that powers crytocurrency
             but they are not a currency.`
        },
        {
            id: 2,
            question: `What is NAA?`,
            answer: `NAA(NFT Antique Art) is a unique NFT Art work bassed on  valuableworth of collection in the worl of NFTs.`
        },
        {
            id: 3,
            question: `What makes us different?`,
            answer: `We are different from others in terms of scalability, utilization, value & being the first in the world
            of NFT to synergize the ancient value & worth assigned the art of beuying it in the digital present world.`
        },
        {
            id: 4,
            question: `Does NAA have a token?`,
            answer: `Yes NAA token updates will be coming soon following our roadmap & further updates availiable.`
        },
        {
            id: 5,
            question: `What will be the value of NAA token?`,
            answer: `As there's more adoption in NAA token. The value keeps increasing as in the
            world of Antique And, there's no limitation to that.`
        },
    ]
    return (
        <div className={`${ParentStyles.myContainer} ${Styles.accord}`} id="FAQ">
            <h3>FAQ</h3>
            {questions.map((question) => (
            <Accordion key={question.id} allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton style={{ backgroundColor: '#3ab8fe', color: '#fff', fontWeight: '800'}}>
                            {question.question}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            {question.answer}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
            ))}
        </div>
    );
}