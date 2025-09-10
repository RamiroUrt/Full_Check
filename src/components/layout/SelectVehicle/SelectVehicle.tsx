import Select from '@/components/ui/Select/Select'

interface Props {
  setFilter: (filter: string) => void;
}
const SelectVehicle = ({ setFilter }: Props) => {
  return (
    <section className='select-vehicle-container'>
        <h1 className='title title-select'>Autopartes y accesorios</h1>
<Select onChange={(id) => setFilter(id)} />
    </section>
  )
}

export default SelectVehicle