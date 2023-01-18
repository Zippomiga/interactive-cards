import FrontCard from "./components/FrontCard"
import BackCard from "./components/BackCard"
import FormSection from "./components/FormSection"
import useInputs from "./hooks/useInputs"
import './styles/app.css'

function App() {
  const [inputs, fix] = useInputs()

  return (
    <main className='container'>
      <section className='cards'>
        <FrontCard inputs={inputs} />
        <BackCard inputs={inputs} />
      </section>
      <FormSection inputs={inputs} fix={fix} />
    </main>
  )
}

export default App