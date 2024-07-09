import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


const mailSender = async(email,title,body)=>{
       
    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : "jobmagnet7@gmail.com",
            pass : "ifqa nasy zjpd jddd"
        }
    })

    const mailOptions = {
        from :  `Job Magnet`,
        to : `${email}`,
        subject : `${title}`,
        html: `${body}`,

    }
    try{
            console.log(mailOptions);
            const result = await transporter.sendMail(mailOptions);
            console.log('Email Sent Successfully');
            console.log(result);
    }
    catch(error){
        console.log("Email send failed with an error :",error);
    }
 }

 export const sendmail = async function sendVerificationEmail(email,title,body){

	try{
            
			const mailResponse   = await mailSender(email,title,body);
			console.log("Email Sent Successfully");
	}
	catch{

		console.log("error occured while sending mails: ",error);
		throw error;

	}
	//pre-post middleware

}




