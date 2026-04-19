import FormPage from '@/components/FormPage';
export default function LoginPage() {
  return <FormPage back="/" backLabel="На главную" tag="Вход" title="Войдите в рабочий кабинет" text="Доступ к заказам, документам, откликам, профилям и сохранённым действиям внутри платформы." sideTitle="Войдите в рабочий кабинет" sideText="После входа доступны заказы, отклики, документы, профили и сохранённые рабочие действия внутри платформы." sideList={['Заказы и отклики','Документы и шаблоны','Профиль и сохранённые действия']} cta="Войти" visual="login" size="compact" fields={[{placeholder:'Email',full:true,name:'email'},{placeholder:'Пароль',full:true,type:'password',name:'password'}]} />;
}
