import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const FormThree = () => {

    const formikProps = {
        initialValues:{firstname:'',lastname:'',color:'',age:''},
        validationSchema:Yup.object({
            firstname:Yup.string().required('Sorry, this is required'),
            lastname:Yup.string().required('Sorry, this is required'),
            age:Yup.string().required('Sorry, this is required')
        }),
        onSubmit: values =>{
            console.log(values)
        }
    };

    const myCustomComponent = ({
        field, // contains all the props from Field, i.e value, onChange, etc
        form: { touched, errors }, // contains all the forms stats
        ...props
    })=>(
        <>
            <label htmlFor={field.name}>{field.name}</label>
            <input
                type='text'
                className='form-control'
                {...field}
            />
            { errors[field.name] && touched[field.name]?
                <span>{errors[field.name]}</span>
            :null}
        </>
    )

    return(
        <div className="container">
            <div className="col-md-12 mt-5">
            <Formik {...formikProps}>
                { formik => (
                    <Form onSubmit={formik.handleSubmit=()=>{
                        alert("form submited successfully")
                    }}>
                    <label htmlFor="firstname">First name</label>
                    <Field name="firstname" type="text" className="form-control"/>
                    {/* <ErrorMessage name="firstname"/> */}
                    { formik.errors.firstname && formik.touched.firstname ? 
                        <span>{formik.errors.firstname}</span>
                    :null}
             
                    <hr className="mb-4" />
                    <Field
                        name="lastname"
                        placeholder="lastname"
                        component={myCustomComponent}
                        labelname="Enter your lastname"
                    />
                    <hr className="mb-4" />
                    <Field
                        name="age"
                        placeholder="age"
                        component={myCustomComponent}
                        labelname="Enter your age"
                    />
                    <hr className="mb-4" />

                    <Field
                        as="select"
                        name="color"
                        className="custom-select"
                    >
                        <option value="red">Red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                    </Field>


                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                        Submit
                    </button>
                </Form>
                )}
            </Formik>
            </div>
        </div>
    )
}

export default FormThree;