function onlyNumbers(input) {
            input.value = input.value.replace(/[^0-9]/g, '');
        }

        let saveFile = () => {
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const country = document.getElementById('country').value;
            const termsChecked = document.getElementById('terms').checked;

            if (firstName === "" || lastName === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
                alert("กรุณากรอกข้อมูลให้ครบทุกช่อง (Please fill in all fields)");
                return;
            }

            if (!email.includes('@')) {
                alert("รูปแบบอีเมลไม่ถูกต้อง ต้องมีเครื่องหมาย '@' (Invalid email format)");
                return;
            }

            if (password !== confirmPassword) {
                alert("รหัสผ่านไม่ตรงกัน (Passwords do not match)");
                return;
            }

            if (!termsChecked) {
                alert("กรุณากดยอมรับเงื่อนไข (Please agree to the terms)");
                return;
            }

            const titleElement = document.querySelector('input[name="title"]:checked');
            const title = titleElement ? titleElement.value : '';
            const termsValue = termsChecked ? 'Accepted' : 'Not Accepted';

            let data = 
                `Title: ${title} \r\n` + 
                `Name: ${firstName} ${lastName} \r\n` + 
                `Email: ${email} \r\n` + 
                `Phone: ${phone} \r\n` + 
                `Password: ${password} \r\n` + 
                `Country: ${country} \r\n` + 
                `Terms: ${termsValue}`;
            
            const textToBLOB = new Blob([data], { type: 'text/plain' });
            const sFileName = 'userData.txt';

            let newLink = document.createElement("a");
            newLink.download = sFileName;

            if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            }
            else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                document.body.appendChild(newLink);
            }

            newLink.click(); 
        }