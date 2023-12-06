import { PiMedalMilitary } from "react-icons/pi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaMoneyBillWheat } from "react-icons/fa6";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaUniversity } from "react-icons/fa";

let Datas = {

  loginData: {
    nationalCodeOrUserName: "",
    password: "",
    securityCodeInput: '',
    submited: false,
    allTrue: false,
  },

  userInformationData: {
    nationalCode: '',
    firstName: '',
    telephoneNumber: null,
    userName: '',
    lastName: '',
    password: ''
  },
  tournamentData: {
    firstAnswer: {
      id: 1,
      answers: ['کتاب', 'دفتر', 'مداد', 'خودکار'],
      correct: false,
      compation: false
    },

    secoundAnswer: {
      id: 2,
      answers: ['گاو', 'گوسفند', 'خر', 'اشکان'],
      correct: false,
      compation: false
    },

    thirdAnswer: {
      id: 3,
      answers: ['سوپرا', 'جی تی ار', 'چلنجر', 'ام فور'],
      correct: false,
      compation: false
    },

    fourdAnswer: {
      id: 4,
      answers: ['کامپیوتر', 'موبایل', 'تبلت', 'لب تاپ'],
      correct: false,
      compation: false
    }
  },

  customerData : [
    {id:1,title:'مسابقات',info:'مشتریان عزیز با شرکت در مسابقات و انجام بازی امتیاز دریافت می نمایند.', showInfo:false ,logo:<PiMedalMilitary style={{width:'22px', height:'22px'}}/>},
    {id:2,title:'تبدیل امتیاز به وجه نقد',info:'مشتریان می توانند در صورت عدم تمایل به استفاده از خدمات باشگاه امتیاز خود را به وجه نقد تبدیل کرده و مبلغ ریالی را از ما دریافت نمایند.', showInfo:false,logo:<RiMoneyDollarCircleFill style={{width:'22px', height:'22px'}}/>},
    {id:3,title:'کسب درامد بیشتر',info:'با دعوت از دوستان و افزایش زیرمجموعه های خود درآمدتان را افزایش دهید.', showInfo:false,logo:<FaMoneyBillWheat style={{width:'22px', height:'22px'}}/>},
    {id:4,title:'گزارش های تحلیلی',info:'با دعوت از دوستان و افزایش زیرمجموعه های خود درآمدتان را افزایش دهید.', showInfo:false,logo:<DiGoogleAnalytics style={{width:'22px', height:'22px'}}/>},
    {id:5,title:'اموزش',info:'علاقمندان به یادگیری انواع مفاهیم و دوره های حرفه ای در بازار سرمایه می توانند در دوره های آموزش شرکت نمایند و دانش خود را در مورد سرمایه گذاری توسعه دهند.', showInfo:false,logo:<FaUniversity style={{width:'22px', height:'22px'}}/>},
  ]
}

export default Datas