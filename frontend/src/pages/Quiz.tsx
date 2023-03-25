import React from 'react'
import { useState } from 'react'
import "./quiz.css"

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

 
const Quiz = () => { 

  const [firstName, setFirstName] = useState("")
   const [lastName, setLastName] = useState("")
  const [age, setAge] = useState("")
  const [frutvegis, setFrutvegis] = useState("")
  const [placesvisited, setPlacesvisited] = useState("")
  const [corecircle, setCorecircle] = useState("")
  const [supportingother, setSupportingother] = useState("")
  const [socialnetwork, setSocialnetwork] = useState("")
  const [achievement, setAchievement] = useState("")
  const [donation, setDonation] = useState("")
  const [bmirange, setBmirange] = useState("")
  const [todocompleted, setTodocompleted] = useState("")
  const [flow, setFlow] = useState("")
  const [dailysteps, setDailysteps] = useState("")
  const [livvision, setLivvision] = useState("")
  const [sleephours, setSleephours] = useState("")
  const [lostvacation, setLostvacation] = useState("")
  const [dailyshouting, setDailyshouting] = useState("")
  const [sufficientincome, setSufficientincome] = useState("")
  const [personalawards, setPersonalawards] = useState("")
  const [timeforpassion, setTimeforpassion] = useState("")
  const [weeklymeditation , setWeeklymeditation] = useState("")
  const [ag, setAg] = useState("")
  const [gender, setGender] = useState("")
  
  

  interface FormDataType {
    firstName: string,
    lastName: string,
    age: string,
    frutvegis:string,
    placesvisited: string,
    corecircle: string,
    supportingother: string,
    socialnetwork: string,
    achievement: string,
    donation: string,
    bmirange: string,
    todocompleted: string,
    flow: string,
    dailysteps: string,
    livvision: string,
    sleephours: string,
    lostvacation: string,
    dailyshouting: string,
    sufficientincome: string,
    personalawards: string,
    timeforpassion: string,
    weeklymeditation: string,
    ag: string,
    gender: string
  
  }
  const responseBody: FormDataType = {
    firstName: "",
    lastName: "",
    age: "0",
    frutvegis: "0",
    placesvisited: "0",
    corecircle: "0",
    supportingother: "0",
    socialnetwork: "0",
    achievement: "0",
    donation: "0",
    bmirange: "0",
    todocompleted: "0",
    flow: "0",
    dailysteps: "0",
    livvision: "0",
    sleephours: "0",
    lostvacation: "0",
    dailyshouting: "0",
    sufficientincome: "0",
    personalawards: "0",
    timeforpassion: "0",
    weeklymeditation: "0",
    ag: "0",
    gender: "",
    


  }

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        responseBody.firstName = firstName
        responseBody.lastName = lastName
      responseBody.age = age
      responseBody.frutvegis = frutvegis
      responseBody.placesvisited = placesvisited
      responseBody.corecircle = corecircle
      responseBody.supportingother = supportingother
      responseBody.socialnetwork = socialnetwork
      responseBody.achievement = achievement
      responseBody.donation = donation
      responseBody.bmirange = bmirange
      responseBody.todocompleted = todocompleted
      responseBody.flow = flow
      responseBody.dailysteps = dailysteps
      responseBody.livvision = livvision
      responseBody.sleephours = sleephours
      responseBody.lostvacation = lostvacation
      responseBody.dailyshouting = dailyshouting
      responseBody.sufficientincome = sufficientincome
      responseBody.personalawards = personalawards
      responseBody.donation = donation
      responseBody.timeforpassion = timeforpassion
      responseBody.weeklymeditation = weeklymeditation
      responseBody.ag = ag
      responseBody.gender = gender
      

  

        console.log(JSON.stringify(responseBody))
	//Form submission happens here
    }
    const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
        setFunction(event.target.value)
    }
  

  return (
    <div className='form__input'>
      <div className="headline">
        <h1>Let's Predict your stress level</h1>
        <h5>It wouldn’t take much time to fill this form and be honest it is for you</h5>
      </div>

      <Form inline onSubmit={onSubmitHandler}>
        <div className='form-card'>
   <FormGroup   > <Label  htmlFor="first_name">First Name</Label>
    <Input id="first_name" onChange={(e)=>inputChangeHandler(setFirstName, e)} type="text"/> </FormGroup>
   <FormGroup><Label  className='Label' htmlFor="last_name">Last Name</Label>
    <Input id="last_name" onChange={(e)=>inputChangeHandler(setLastName, e)} type="text"/> </FormGroup>
   <FormGroup><Label className='Label' htmlFor="age">Age</Label>
    <Input id="age" onChange={(e) => inputChangeHandler(setAge, e)} type="number" /> </FormGroup>
        
       <FormGroup><Label className='Label' htmlFor="fruits-veggis">How many fruits or vegetables do you eat everyday?</Label>
        <Input id="fruits-veggis" onChange={(e) => inputChangeHandler(setFrutvegis, e)} type="number" /> </FormGroup>
        
       <FormGroup><Label className='Label' htmlFor="places-visited">How many new places do you visit?</Label>
        <Input id="places-visited" onChange={(e) => inputChangeHandler(setPlacesvisited, e)} type="number" /> </FormGroup>
       <FormGroup><Label className='Label' htmlFor="core-circle">How many people are very close to you?</Label>
    <Input id="core-circle" onChange={(e) => inputChangeHandler(setCorecircle, e)} type="number" /> </FormGroup>
     
        </div>
        <div className='form-card'>

       
   <FormGroup><Label className='Label' htmlFor="supporting-other">How many people do you help achieve a better life?</Label>
    <Input id="supporting-other" onChange={(e) => inputChangeHandler(setSupportingother, e)} type="number" /> </FormGroup>
    
   <FormGroup><Label className='Label' htmlFor="social-network">With how many people do you interact with during a typical day?</Label>
    <Input id="social-network" onChange={(e) => inputChangeHandler(setSocialnetwork, e)} type="number" /> </FormGroup>
    
   <FormGroup><Label className='Label' htmlFor="achievement">How many remarkable achievements are you proud of?</Label>
    <Input id="achievement" onChange={(e) => inputChangeHandler(setAchievement, e)} type="number" /> </FormGroup>
   <FormGroup><Label className='Label' htmlFor="donation">How many times do you donate your time or money to good causes?</Label>
    <Input id="donation" onChange={(e) => inputChangeHandler(setDonation, e)} type="number" /> </FormGroup>
   <FormGroup><Label className='Label' htmlFor="bmi-range">What is your body mass index (bmi) range?</Label>
    <Input id="bmi-range" onChange={(e) => inputChangeHandler(setBmirange, e)} type="number" /> </FormGroup>
   
    </div>
    <div className='form-card'>
   <FormGroup><Label className='Label' htmlFor="todo-completed">How well do you complete your weekly to-do lists?</Label>
    <Input id="todo-completed" onChange={(e) => inputChangeHandler(setTodocompleted, e)} type="number" /> </FormGroup>
    
   <FormGroup><Label className='Label' htmlFor="flow">In a typical day, how many hours do you experience "Flow"?</Label>
    <Input id="flow" onChange={(e) => inputChangeHandler(setFlow, e)} type="number" /> </FormGroup>
    
   <FormGroup><Label className='Label' htmlFor="daily-steps">How many steps in thousands do you typically walk everyday?</Label>
    <Input id="daily-steps" onChange={(e) => inputChangeHandler(setDailysteps, e)} type="number" /> </FormGroup>
    
   <FormGroup><Label className='Label' htmlFor="liv-vision">For how many years ahead is your life vision very clear for?</Label>
    <Input id="liv-vision" onChange={(e) => inputChangeHandler(setLivvision, e)} type="number" /> </FormGroup>
   <FormGroup><Label className='Label' htmlFor="sleep-hours">About how long do you typically sleep?</Label>
    <Input id="sleep-hours" onChange={(e) => inputChangeHandler(setSleephours, e)} type="number" /> </FormGroup>
    
        </div>
        <div className='form-card'>
   <FormGroup><Label className='Label' htmlFor="lost-vacation">How many days of vacation do you typically lose every year ?</Label>
    <Input id="lost-vacation" onChange={(e) => inputChangeHandler(setLostvacation, e)} type="number" /> </FormGroup>
    
   <FormGroup><Label className='Label' htmlFor="daily-shouting">How often do you shout or sulk at somebody?</Label>
    <Input id="daily-shouting" onChange={(e) => inputChangeHandler(setDailyshouting, e)} type="number" /> </FormGroup>
    
   <FormGroup><Label className='Label' htmlFor="sufficient-income">How sufficient is your income to cover basic life expenses?</Label>
    <Input id="sufficient-income" onChange={(e) => inputChangeHandler(setSufficientincome, e)} type="number" /> </FormGroup>
    
   <FormGroup><Label className='Label' htmlFor="personal-awards">How many recognitions have you received in your life?</Label>
    <Input id="personal-awards" onChange={(e) => inputChangeHandler(setPersonalawards, e)} type="number" /> </FormGroup>
   <FormGroup><Label className='Label' htmlFor="time-for-passion">How many hours do you spend everyday doing what you are passionate about?</Label>
    <Input id="time-for-passion" onChange={(e) => inputChangeHandler(setTimeforpassion, e)} type="number" /> </FormGroup>
    
        </div>
        <div className='form-card'>
   <FormGroup><Label className='Label' htmlFor="weekly-meditation">In a typical week, how many times do you have the opportunity to think about yourself?</Label>
    <Input id="weekly-meditation" onChange={(e) => inputChangeHandler(setWeeklymeditation, e)} type="number" /> </FormGroup>
    
   <FormGroup><Label className='Label' htmlFor="age">Age groups</Label>
    <Input id="age" onChange={(e) => inputChangeHandler(setAg, e)} type="number" /> </FormGroup>
    
   <FormGroup><Label className='Label' htmlFor="gender">Male or female</Label>
    <Input id="gender" onChange={(e) => inputChangeHandler(setGender, e)} type="number" /> </FormGroup>
    
<div className="submit-btn">
            <Input type="submit" />
            </div>
          </div>
      </Form>
      </div>
  )
}
export default Quiz