# Importing libraries
import imaplib
import email
import os
import sys

# directory where to save attachments (default: current)
detach_dir = 'attachments'
# if 'attachments' not in os.listdir(detach_dir):
#    os.mkdir('attachments')

user = 'internshipjs@gmail.com'
password = '@qwerty1234'
imap_url = 'smtp.gmail.com'

# user = sys.argv[1]
# password = sys.argv[2]
# fromaddr = list(sys.argv[3].split(','))

# Function to get email content part i.e its body part


def get_body(msg):
    if msg.is_multipart():
        return get_body(msg.get_payload(0))
    else:
        return msg.get_payload(None, True)

# Function to search for a key value pair


def search(key, value, con):
    result, data = con.search(None, key, '"{}"'.format(value))
    return data

# Function to get the list of emails under this label


def get_emails(result_bytes):
    msgs = []  # all the email data are pushed inside an array
    email_body_list = []
    for num in result_bytes[0].split():
        typ, data = con.fetch(num, '(RFC822)')
        msgs.append(data)
        email_body_list.append(data[0][1])
        #email_body = data[0][1]
        #mail = email.message_from_bytes(email_body)

    return msgs, email_body_list


# this is done to make SSL connnection with GMAIL
con = imaplib.IMAP4_SSL(imap_url)

# logging the user in
con.login(user, password)

# calling function to check for email under this label
con.select('Inbox')
fromaddr = ['saadskhan15@outlook.com', 'saadskhan15@gmail.com']


# fetching emails from this user "tu**h*****1@gmail.com"
#msgs = []
#email_body_list = []
for i in range(len(fromaddr)):
    msgs, email_body_list = get_emails(search('FROM', fromaddr[i], con))

    # Uncomment this to see what actually comes as data
    # print(msgs)

    # Finding the required content from our msgs
    # User can make custom changes in this part to
    # fetch the required content he / she needs

    # printing them by the order they are displayed in your gmail
    for msg in msgs[::-1]:
        email_body = email_body_list.pop()
        mail = email.message_from_bytes(email_body)
        if mail.get_content_maintype() != 'multipart':
            continue
        print("["+mail["From"]+"] :" + mail["Subject"])
        # we use walk to create a generator so we can iterate on the parts and forget about the recursive headach
        for part in mail.walk():
            # multipart are just containers, so we skip them
            if part.get_content_maintype() == 'multipart':
                continue

            # is this part an attachment ?
            if part.get('Content-Disposition') is None:
                continue

            filename = part.get_filename()

            #filename = mail["From"] + "_hw1answer"

            att_path = os.path.join(detach_dir, filename)

            # Check if its already there
            if not os.path.isfile(att_path):
                # finally write the stuff
                fp = open(att_path, 'wb')
                fp.write(part.get_payload(decode=True))
                fp.close()

        for sent in msg:
            if type(sent) is tuple:

                # encoding set as utf-8
                content = str(sent[1], 'utf-8')
                data = str(content)

                # Handling errors related to unicodenecode
                try:
                    indexstart = data.find("ltr")
                    data2 = data[indexstart + 5: len(data)]
                    indexend = data2.find("</div>")

                    # printtng the required content which we need
                    # to extract from our email i.e our body
                    #email_body = email_body_list[msg]

                    print(data2[0: indexend])

                except UnicodeEncodeError as e:
                    pass
