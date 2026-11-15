# AboEsmail — نسخة GitHub Pages

مجهزة للريبو: https://github.com/m7md-3bdo/abo_esmail
العنوان المتوقع بعد نجاح النشر: https://m7md-3bdo.github.io/abo_esmail/

## 1. رفع الملفات
فك الضغط وافتح مجلد abo_esmail. على GitHub افتح الريبو واختر Add file → Upload files. إذا كان الريبو فارغًا اضغط uploading an existing file.
اسحب محتويات المجلد إلى صفحة الرفع، وليس ملف ZIP ولا المجلد الخارجي نفسه.
يجب أن يظهر package.json مباشرة في جذر الريبو، ومعه src وpublic وscripts وvite.config.js.
ارفع مجلد .github كذلك؛ يحتوي workflows/deploy.yml المسؤول عن النشر. لا ترفع node_modules أو dist.
اضغط Commit changes على فرع main.

## 2. تفعيل النشر
افتح Settings → Pages. تحت Build and deployment اختر Source: GitHub Actions.
افتح Actions → Deploy AboEsmail to GitHub Pages. إذا فشلت محاولة سبقت تفعيل Pages، اختر Re-run all jobs أو Run workflow بعد التفعيل.
انتظر العلامة الخضراء، ثم افتح العنوان المتوقع أعلاه. وجود الملف هنا لا يعني أنه رُفع أو نُشر تلقائيًا.
إذا لم يظهر workflow، تأكد أن .github/workflows/deploy.yml موجود فعلًا في الريبو؛ يمكنك إنشاء الملف من Add file → Create new file ولصق محتواه من النسخة المحلية.

## التشغيل المحلي
npm install
npm run dev
افتح الرابط الظاهر في التيرمنال، والذي يتضمن /abo_esmail/.

## التعديلات المستقبلية
عدّل الملفات ثم ارفعها واعمل Commit. ملف GitHub Actions يعيد بناء الموقع ونشره تلقائيًا.

## ما تم ضبطه
- Vite base وReact Router basename لمسار الريبو.
- الصور واللوجو تحت نفس المسار.
- إنشاء ملفات دخول للباقات عند البناء لفتح روابطها المباشرة وتحديثها بدون 404.
- canonical وOpen Graph وTwitter Cards تشير لعنوان GitHub Pages النهائي، وصورة المشاركة موجودة ضمن المشروع.
- لا مفاتيح سرية ولا خطوات دفع إلكتروني؛ الحجز يفتح رسالة واتساب جاهزة فقط.

معاينة المشاركة تعتمد على دعم التطبيق والكاش لديه، ولا يمكن ضمانها في كل ستوري. عند استخدام دومين خاص لاحقًا، يلزم تعديل base وروابط المشاركة وorigin في scripts/pages-routes.mjs.
