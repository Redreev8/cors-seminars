import { FC } from 'react'
import ListSeminar from './components/seminar/list-seminar'
import Container from './ui/container'
import useGetListSeminar from './components/seminar/useGetListSeminar'
import Title from './ui/title'
import Loading from './ui/loading'
import { createPortal } from 'react-dom'
import СonfirmationModal from './components/confirmation-modal'
import useRemoveSeminar from './components/seminar/useRemoveSeminar'
import ModalChangeSeminar from './components/seminar/modal-change-seminar'
import useChangeSeminar from './components/seminar/useChangeSeminar'

const App: FC = () => {
    const { listSeminar, error, setListSeminar } = useGetListSeminar()
    const {
        idDelSeminar,
        handelYes,
        errorRemove,
        loudingRemove,
        handelNo,
        handelClickDeleteSeminar,
    } = useRemoveSeminar(setListSeminar)
    const {
        changemySeminar,
        errorChange,
        loudingChange,
        changeSeminar,
        handelChangeSeminar,
        resetChangeSeminar,
    } = useChangeSeminar(setListSeminar)
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
                    {createPortal(
                        <СonfirmationModal
                            isOpen={typeof idDelSeminar === 'number'}
                            onYes={handelYes}
                            onNo={handelNo}
                            disabled={loudingRemove}
                        >
                            <p className="text-dark-tan text-base">
                                {errorChange}
                            </p>
                        </СonfirmationModal>,
                        document.body,
                    )}
                    {createPortal(
                        <ModalChangeSeminar
                            disabled={loudingChange}
                            seminar={changemySeminar}
                            onCahge={changeSeminar}
                            onClose={resetChangeSeminar}
                        >
                            <p className="text-dark-tan text-base">
                                {errorRemove}
                            </p>
                        </ModalChangeSeminar>,
                        document.body,
                    )}
                    {error && <Title>{error}</Title>}
                    {!error && (
                        <ListSeminar
                            onDel={handelClickDeleteSeminar}
                            onChange={handelChangeSeminar}
                            listSeminar={listSeminar}
                        />
                    )}
                </Container>
            </section>
        </main>
    )
}

export default App
