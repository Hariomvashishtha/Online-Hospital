
import ServiceList from './serviceList';

const Services = () => {
  return (
    <section>
        <div className="container">
            <div className='xl:w-[450px] mx-auto'>
                <h2 className='text-center heading text-[40px]'>Our Medical Services</h2>
                <p className="text-center text_para">World-Class care for everyone.Our health System offers unmatched ,
                 expert health care from lab to clinic</p>
                
            </div>
        </div>
        <ServiceList />
    </section>
  )
}

export default Services;