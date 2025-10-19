import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [activeNav, setActiveNav] = useState('documents');

  const navItems = [
    { id: 'messages', icon: 'MessageSquare', label: 'Сообщения' },
    { id: 'mail', icon: 'Mail', label: 'Почта' },
    { id: 'documents', icon: 'FileText', label: 'Документы' },
    { id: 'calendar', icon: 'Calendar', label: 'Календарь' },
    { id: 'alerts', icon: 'AlertCircle', label: 'Уведомления' },
    { id: 'analytics', icon: 'BarChart3', label: 'Аналитика' },
    { id: 'settings', icon: 'Settings', label: 'Настройки' },
    { id: 'more', icon: 'MoreHorizontal', label: 'Ещё' },
  ];

  const mainFeatures = [
    {
      id: 1,
      title: 'Добавление новых знаний',
      icon: 'BookOpen',
      description: 'Загрузка и индексация документов',
      color: 'from-purple-400/20 to-blue-400/20',
    },
    {
      id: 2,
      title: 'Матричное сравнение документов',
      icon: 'Grid3x3',
      description: 'Анализ различий между версиями',
      color: 'from-blue-400/20 to-cyan-400/20',
    },
    {
      id: 3,
      title: 'Генерация документов',
      icon: 'FileEdit',
      description: 'Автоматическое создание на основе шаблонов',
      color: 'from-cyan-400/20 to-teal-400/20',
    },
    {
      id: 4,
      title: 'Поиск связанных НПА',
      icon: 'Search',
      description: 'Интеграция с базами правовых актов',
      color: 'from-teal-400/20 to-green-400/20',
    },
    {
      id: 5,
      title: 'Мониторинг поручений',
      icon: 'ClipboardCheck',
      description: 'Отслеживание статусов и сроков',
      color: 'from-green-400/20 to-lime-400/20',
    },
    {
      id: 6,
      title: 'Входящие обращения',
      icon: 'Inbox',
      description: 'Обработка и маршрутизация запросов',
      color: 'from-lime-400/20 to-yellow-400/20',
    },
  ];

  const recentWorks = [
    { id: 1, title: 'Анализ изменений в ФЗ-273', date: '2 часа назад', status: 'completed' },
    { id: 2, title: 'Сравнение редакций приказа №45', date: '5 часов назад', status: 'completed' },
    { id: 3, title: 'Генерация протокола совещания', date: 'Вчера', status: 'completed' },
    { id: 4, title: 'Поиск НПА по теме образования', date: 'Вчера', status: 'completed' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F1F0FB] via-[#F8F7FF] to-[#E5DEFF] flex">
      <aside className="w-20 bg-white/40 backdrop-blur-xl border-r border-white/60 flex flex-col items-center py-6 gap-6 shadow-lg">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveNav(item.id)}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              activeNav === item.id
                ? 'bg-primary text-white shadow-lg shadow-primary/50'
                : 'bg-white/60 text-gray-600 hover:bg-white/80'
            }`}
            title={item.label}
          >
            <Icon name={item.icon} size={22} />
          </button>
        ))}
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto space-y-8">
          <header className="animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Система управления НПА</h1>
            <p className="text-gray-600">Интеграция с внешними базами и автоматизация документооборота</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainFeatures.map((feature, index) => (
              <Card
                key={feature.id}
                className={`p-6 bg-white/50 backdrop-blur-md border-white/60 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}
                >
                  <Icon name={feature.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400/20 to-blue-400/20 flex items-center justify-center">
                  <Icon name="History" size={20} className="text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Мои работы</h2>
              </div>
              <div className="space-y-3">
                {recentWorks.map((work, index) => (
                  <div
                    key={work.id}
                    className="flex items-center justify-between p-4 bg-white/60 rounded-2xl hover:bg-white/80 transition-all duration-200 cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <div>
                        <p className="font-medium text-gray-800">{work.title}</p>
                        <p className="text-sm text-gray-500">{work.date}</p>
                      </div>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
