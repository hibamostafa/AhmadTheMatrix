# EmailJS Templates Setup - Quick Guide

## ✅ تم إعداد Public Key و Service ID!

- **Service ID**: `service_umicouq`
- **Public Key**: `1xOsh1llBf4BJ4lyv`

## 📧 الآن تحتاج إنشاء Templates:

### 1. Contact Form Template
1. اذهب إلى [EmailJS Dashboard](https://dashboard.emailjs.com)
2. اذهب إلى "Email Templates"
3. اضغط "Create New Template"
4. **Template ID**: `template_contact_form`
5. **Subject**: `New Contact Form Submission - {{from_name}}`
6. **Content**:
```
Hello Ahmed,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Message: {{message}}

Please reply to: {{reply_to}}

Best regards,
Your Website
```

### 2. Appointment Template
1. اذهب إلى "Email Templates"
2. اضغط "Create New Template"
3. **Template ID**: `template_appointment`
4. **Subject**: `New Appointment Booking - {{from_name}}`
5. **Content**:
```
Hello Ahmed,

You have received a new appointment booking:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service Needed: {{service}}
Meeting Type: {{meeting_type}}
Preferred Date: {{preferred_date}}
Preferred Time: {{preferred_time}}
Additional Information: {{message}}

Please reply to: {{reply_to}}

Best regards,
Your Website
```

## 🎯 بعد إنشاء Templates:

1. **اختبر النموذج** - املأ نموذج الاتصال
2. **اضغط Send** - ستظهر رسالة نجاح
3. **تحقق من الإيميل** - ستصل الرسالة إلى `Ahmed.ayoub@mail.com`

## 🔄 إذا لم تعمل Templates:

- سيتم فتح برنامج الإيميل كـ fallback
- كل شيء سيعمل بشكل طبيعي

## 📱 النتيجة النهائية:

- ✅ **EmailJS يعمل** - إرسال مباشر
- ✅ **Fallback متوفر** - mailto إذا فشل EmailJS
- ✅ **بدون أخطاء** - تجربة سلسة

**كل شيء جاهز! فقط أنشئ Templates وستعمل بشكل مثالي!** 🎉
