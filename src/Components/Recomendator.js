import {Button, Container, Row, Col, Card} from 'react-bootstrap'
import { useEffect, useState} from "react"
import {data} from "./data"

export function Recomendator() {
    const defaultObject = {
        value: "",
        isLeaf: false,
    }
    const [item, setItem] = useState(defaultObject)
    useEffect(()=>{
        setItem(data["nodes"][0])
    }, [])

    const onClickButtonYes = () => {
        onClickButton("yes")
    }

    const onClickButtonNo = () => {
        onClickButton("no")
    }

    const onClickButton = (route) => {
        const nextItemId = item[route]
        const nextItem = data["nodes"].filter(
            (actualItem)=>{
                return actualItem.id === nextItemId
            }
        )[0]
        setItem(nextItem)
    }
    console.log(process.env.PUBLIC_URL + item.logo)

    return(
        <Container>
            <Card className="p-5 mt-5">
                <Row>
                    <h1 className="text-center mt-5">¡Recomiéndame un ánime!</h1>
                </Row>
                {
                    item.isLeaf ?
                        <Row>
                            <h3 className="text-center mt-5">Te recomendamos ver {item.value}</h3>
                        </Row> :
                        <Row>
                            <h3 className="text-center mt-5">{item.value}</h3>
                        </Row>
                }
                <Row>
                    {
                        item.isLeaf ?
                            null
                            :
                            <Col className="xs-12">
                                <div className="text-center">
                                    <Button className="m-3" onClick={onClickButtonYes}>Sí</Button>
                                    <Button className="m-3" onClick={onClickButtonNo}>No</Button>
                                </div>
                            </Col>
                    }
                </Row>
                {
                    item.isLeaf ?
                        <Row>
                            <img src={item.logo} alt={item.logo} className="text-center p-5"/>
                        </Row> :
                        null

                }
            </Card>
        </Container>
    )
}