# Python code to illustrate Sending mail with attachments 
# from your Gmail account 

# libraries to be imported 
import smtplib 
from email.mime.multipart import MIMEMultipart 
from email.mime.text import MIMEText 
from email.mime.base import MIMEBase 
from email import encoders 

fromaddr = "internshipjs@gmail.com"
toaddr = ["saadskhan15@outlook.com","saadskhan15@gmail.com"]

# instance of MIMEMultipart 
msg = MIMEMultipart() 

# storing the senders email address 
msg['From'] = fromaddr 

# storing the receivers email address 
for j in range(len(toaddr)):
    msg['To'] = toaddr[j]

# storing the subject 
msg['Subject'] = "Sending email using python to many people"

# string to store the body of the mail 
body = "Hi, this email is sent using python"

# attach the body with the msg instance 
msg.attach(MIMEText(body, 'plain')) 

# open the file to be sent 
filename = "engg admission process.pdf"
attachment = open("D:\\Users\\User\\Desktop\\engg admission process.pdf", "rb") 

# instance of MIMEBase and named as p 
p = MIMEBase('application', 'octet-stream') 

# To change the payload into encoded form 
p.set_payload((attachment).read()) 

# encode into base64 
encoders.encode_base64(p) 

p.add_header('Content-Disposition', "attachment; filename= %s" % filename) 

# attach the instance 'p' to instance 'msg' 
msg.attach(p) 

for i  in range(len(toaddr)):
    # creates SMTP session 
    s = smtplib.SMTP('smtp.gmail.com', 587) 

    # start TLS for security 
    s.starttls() 

    # Authentication 
    s.login(fromaddr, "@qwerty1234") 

    # Converts the Multipart msg into a string 
    text = msg.as_string() 

    # sending the mail 
    s.sendmail(fromaddr, toaddr[i], text) 

    # terminating the session 
    s.quit() 
