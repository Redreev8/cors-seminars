import { FC } from 'react'
import ListSeminar from './components/seminar/list-seminar'
import Container from './ui/container'
import useGetListSeminar from './components/seminar/useGetListSeminar'
import Title from './ui/title'
import Loading from './ui/loading'
import { createPortal } from 'react-dom'

const App: FC = () => {
    const { listSeminar, error } = useGetListSeminar()
    console.log(error.length === 0 && listSeminar.length === 0)
    return (
        <main>
            <section>
                <Container>
                    {createPortal(
                        <Loading
                            isOpen={
                                error.length === 0 && listSeminar.length === 0
                            }
                            className="fixed top-0 left-0 h-screen w-full"
                        />,
                        document.body,
                    )}
                    {error && <Title>{error}</Title>}
                    {!error && <ListSeminar listSeminar={listSeminar} />}
                </Container>
            </section>
        </main>
    )
}

export default App
