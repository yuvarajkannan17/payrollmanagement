import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/SalaryEntryForm.css';
import { useNavigate } from 'react-router-dom';

// Validation schema using Yup
const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    month: Yup.string().required('Month is required'),
    totalWorkingDays: Yup.number().required('Total Working Days is required').positive().integer(),
    basic: Yup.number().required('Basic is required').positive(),
    houseRentAllowance: Yup.number().required('House Rent Allowance is required').positive(),
    specialAllowance: Yup.number().required('Special Allowance is required').positive(),
    otherAllowance: Yup.number().required('Other Allowance is required').positive(),
    providentFund: Yup.number().required('Provident Fund is required').positive(),
    professionalTax: Yup.number().required('Professional Tax is required').positive(),
    incomeTax: Yup.number().required('Income Tax is required').positive(),
    grossEarning: Yup.number().required('Gross Earning is required').positive(),
    totalAmount: Yup.number().required('Total Amount is required').positive(),
});

const SalaryEntryForm = () => {
   const navigate= useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
            month: '',
            totalWorkingDays: '',
            basic: '',
            houseRentAllowance: '',
            specialAllowance: '',
            otherAllowance: '',
            providentFund: '',
            professionalTax: '',
            incomeTax: '',
            grossEarning: '',
            totalAmount: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log('Form Data:', values);
        },
    });

    const handleMonthChange = (date) => {
        if (date) {
            const formattedDate = date.toLocaleString('default', { month: 'long', year: 'numeric' }); 
            formik.setFieldValue('month', formattedDate); 
        } else {
            formik.setFieldValue('month', '');
        }
    };
    


    return (
        <div className="salary-entry-form-wrapper">
            
            <div className="salary-entry-form-container">
                <h2 className="salary-entry-form-title">Salary Entry Form</h2>

                <form onSubmit={formik.handleSubmit}>
                    {/* Name and Month Fields */}
                    <div className="salary-entry-form-row">
                        <div className="salary-entry-form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder='Name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.name && formik.errors.name && <div className="salary-entry-error">{formik.errors.name}</div>}
                        </div>

                        <div className="salary-entry-form-group">
                            <label>Month</label>
                            <DatePicker
                                selected={formik.values.month ? new Date(`${formik.values.month} 1`) : null}
                                onChange={handleMonthChange}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                                placeholderText="Select Month and Year"
                                name="month"
                                
                            />


                            {formik.touched.month && formik.errors.month && <div className="salary-entry-error">{formik.errors.month}</div>}
                        </div>
                    </div>

                    {/* Total Working Days and Basic Fields */}
                    <div className="salary-entry-form-row">
                        <div className="salary-entry-form-group">
                            <label>Total Working Days</label>
                            <input
                                type="number"
                                name="totalWorkingDays"
                                placeholder='Total Working Days'
                                value={formik.values.totalWorkingDays}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.totalWorkingDays && formik.errors.totalWorkingDays && <div className="salary-entry-error">{formik.errors.totalWorkingDays}</div>}
                        </div>

                        <div className="salary-entry-form-group">
                            <label>Basic</label>
                            <input
                                type="text"
                                placeholder='Basic'
                                name="basic"
                                value={formik.values.basic}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.basic && formik.errors.basic && <div className="salary-entry-error">{formik.errors.basic}</div>}
                        </div>
                    </div>

                    {/* Other Allowances */}
                    <div className="salary-entry-form-row">
                        <div className="salary-entry-form-group">
                            <label>House Rent Allowance</label>
                            <input
                                type="text"
                                placeholder='House Rent Allowance'
                                name="houseRentAllowance"
                                value={formik.values.houseRentAllowance}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.houseRentAllowance && formik.errors.houseRentAllowance && <div className="salary-entry-error">{formik.errors.houseRentAllowance}</div>}
                        </div>

                        <div className="salary-entry-form-group">
                            <label>Special Allowance</label>
                            <input
                                type="text"
                                name="specialAllowance"
                                placeholder='Special Allowance'
                                value={formik.values.specialAllowance}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.specialAllowance && formik.errors.specialAllowance && <div className="salary-entry-error">{formik.errors.specialAllowance}</div>}
                        </div>
                    </div>

                    {/* Other Fields */}
                    <div className="salary-entry-form-row">
                        <div className="salary-entry-form-group">
                            <label>Other Allowance</label>
                            <input
                                type="text"
                                name="otherAllowance"
                                placeholder='Other Allowance'
                                value={formik.values.otherAllowance}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.otherAllowance && formik.errors.otherAllowance && <div className="salary-entry-error">{formik.errors.otherAllowance}</div>}
                        </div>

                        <div className="salary-entry-form-group">
                            <label>Provident Fund</label>
                            <input
                                type="text"
                                name="providentFund"
                                placeholder='Provident Fund'
                                value={formik.values.providentFund}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.providentFund && formik.errors.providentFund && <div className="salary-entry-error">{formik.errors.providentFund}</div>}
                        </div>
                    </div>

                    {/* Professional Tax and Income Tax Fields */}
                    <div className="salary-entry-form-row">
                        <div className="salary-entry-form-group">
                            <label>Professional Tax</label>
                            <input
                                type="text"
                                name="professionalTax"
                                placeholder='Professional Tax'
                                value={formik.values.professionalTax}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.professionalTax && formik.errors.professionalTax && <div className="salary-entry-error">{formik.errors.professionalTax}</div>}
                        </div>

                        <div className="salary-entry-form-group">
                            <label>Income Tax</label>
                            <input
                                type="text"
                                name="incomeTax"
                                placeholder='Income Tax'
                                value={formik.values.incomeTax}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.incomeTax && formik.errors.incomeTax && <div className="salary-entry-error">{formik.errors.incomeTax}</div>}
                        </div>
                    </div>

                    {/* Gross Earning and Total Amount Fields */}
                    <div className="salary-entry-form-row">
                        <div className="salary-entry-form-group">
                            <label>Gross Earning</label>
                            <input
                                type="text"
                                name="grossEarning"
                                placeholder='Gross Earning'
                                value={formik.values.grossEarning}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.grossEarning && formik.errors.grossEarning && <div className="salary-entry-error">{formik.errors.grossEarning}</div>}
                        </div>

                        <div className="salary-entry-form-group">
                            <label>Total Amount</label>
                            <input
                                type="text"
                                name="totalAmount"
                                placeholder='Total Amount'
                                value={formik.values.totalAmount}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.totalAmount && formik.errors.totalAmount && <div className="salary-entry-error">{formik.errors.totalAmount}</div>}
                        </div>
                    </div>

                    <button type="submit" className="salary-entry-submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SalaryEntryForm;
