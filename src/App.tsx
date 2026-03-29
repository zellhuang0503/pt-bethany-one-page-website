/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Globe, 
  Calendar, 
  Clock, 
  Church, 
  Leaf, 
  Users, 
  Moon, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id={id} ref={ref} className={`section-padding ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div className="min-h-screen selection:bg-bethany-olive selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 md:px-12 bg-bethany-cream/80 backdrop-blur-md border-b border-bethany-earth/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-bethany-olive rounded-full flex items-center justify-center text-white font-serif font-bold">B</div>
          <span className="font-serif font-bold text-lg tracking-wider">屏東伯大尼靈修院</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="#about" className="hover:text-bethany-olive transition-colors">關於</a>
          <a href="#services" className="hover:text-bethany-olive transition-colors">服務</a>
          <a href="#facilities" className="hover:text-bethany-olive transition-colors">環境</a>
          <a href="#event" className="hover:text-bethany-olive transition-colors">活動</a>
          <a href="#contact" className="hover:text-bethany-olive transition-colors">聯絡</a>
        </div>
        <a 
          href="#contact" 
          className="bg-bethany-olive text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-bethany-earth transition-all shadow-lg shadow-bethany-olive/20"
        >
          預約空間
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/seed/bethany-garden/1920/1080?blur=2" 
            alt="Bethany Garden" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bethany-ink/40 via-transparent to-bethany-cream"></div>
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 border border-white/30 rounded-full text-white text-xs tracking-[0.3em] uppercase mb-8 backdrop-blur-sm">
              Bethany Retreat Garden
            </span>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              走進南台灣曠野<br/>
              <span className="italic font-light">在寧靜中聽見神</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light tracking-widest mb-12 max-w-2xl mx-auto leading-relaxed">
              屏東伯大尼靈修院，為您預備一個歸回安息、重新得力的優質空間。
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href="#about" 
                className="group flex items-center gap-2 bg-white text-bethany-ink px-8 py-4 rounded-full font-medium hover:bg-bethany-olive hover:text-white transition-all duration-300"
              >
                探索靈修空間
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-bethany-olive"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </header>

      {/* Philosophy Section */}
      <Section id="about" className="bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/meditation/800/1200" 
                alt="Meditation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-bethany-olive p-8 rounded-3xl text-white shadow-xl hidden md:block max-w-[240px]">
              <p className="font-serif italic text-lg leading-relaxed">
                「你們要休息，要知道我是神。」
              </p>
              <p className="text-xs mt-4 opacity-70 tracking-widest">— 詩篇 46:10</p>
            </div>
          </div>
          <div>
            <span className="text-bethany-olive font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-bethany-ink">
              歸回安息，<br/>平靜安穩。
            </h2>
            <p className="text-bethany-ink/70 text-lg leading-relaxed mb-8">
              在繁忙的現代生活中，我們需要一個「曠野」來與主面對面。屏東伯大尼靈修院座落於南台灣的寧靜角落，提供一個遠離塵囂、親近自然的環境，讓您的心靈得以重新對焦。
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-bethany-cream flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-bethany-olive" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">自然與寧靜</h4>
                  <p className="text-bethany-ink/60">廣闊的園區與自然步道，是默想與禱告的最佳場所。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-bethany-cream flex items-center justify-center flex-shrink-0">
                  <Moon className="w-6 h-6 text-bethany-olive" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">安靜禱告</h4>
                  <p className="text-bethany-ink/60">為牧者與信徒提供專屬的安靜空間，重新聽見神的聲音。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section id="services" className="bg-bethany-cream">
        <div className="text-center mb-16">
          <span className="text-bethany-olive font-medium tracking-[0.2em] uppercase text-sm mb-4 block">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-bold text-bethany-ink">靈修與聚會服務</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { 
              icon: <Church className="w-8 h-8" />, 
              title: "教會野外禮拜", 
              desc: "提供寬敞的戶外空間，讓弟兄姊妹在受造界中敬拜造物主。" 
            },
            { 
              icon: <Users className="w-8 h-8" />, 
              title: "靈修退修會", 
              desc: "適合各類團契、小組舉辦退修活動，深化肢體連結與屬靈生命。" 
            },
            { 
              icon: <Moon className="w-8 h-8" />, 
              title: "牧者安靜禱告", 
              desc: "專為牧者預備的安靜室，提供身心靈重新得力的避風港。" 
            },
            { 
              icon: <Leaf className="w-8 h-8" />, 
              title: "小組 Retreat", 
              desc: "精緻的小組聚會空間，讓同工在輕鬆氛圍中分享與對齊。" 
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 group border border-bethany-earth/5">
              <div className="w-16 h-16 bg-bethany-cream rounded-2xl flex items-center justify-center text-bethany-olive mb-8 group-hover:bg-bethany-olive group-hover:text-white transition-colors duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-bethany-ink/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Facilities Section */}
      <Section id="facilities" className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-bethany-olive font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Our Spaces</span>
              <h2 className="text-4xl md:text-5xl font-bold text-bethany-ink">優質的環境與設施</h2>
              <p className="text-bethany-ink/60 mt-6 text-lg">我們精心打造每一個角落，只為讓您能全然專注於神。</p>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-3 border border-bethany-earth/20 rounded-full text-sm font-medium">舒適住宿</div>
              <div className="px-6 py-3 border border-bethany-earth/20 rounded-full text-sm font-medium">靈修會場</div>
              <div className="px-6 py-3 border border-bethany-earth/20 rounded-full text-sm font-medium">自然步道</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] aspect-[16/9]">
              <img 
                src="https://picsum.photos/seed/chapel/1200/800" 
                alt="Chapel" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bethany-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <div className="text-white">
                  <h4 className="text-2xl font-bold">敬拜與靈修會場</h4>
                  <p className="opacity-80">寬敞明亮，適合各種規模的屬靈聚會。</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] aspect-[4/5]">
              <img 
                src="https://picsum.photos/seed/room/600/800" 
                alt="Room" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bethany-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <div className="text-white">
                  <h4 className="text-2xl font-bold">舒適住宿客房</h4>
                  <p className="opacity-80">簡潔溫馨，提供深度的安眠與休息。</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] aspect-[4/5]">
              <img 
                src="https://picsum.photos/seed/fellowship/600/800" 
                alt="Fellowship" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bethany-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <div className="text-white">
                  <h4 className="text-2xl font-bold">交誼與分享空間</h4>
                  <p className="opacity-80">溫暖的氛圍，促進肢體間的深入交流。</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] aspect-[16/9]">
              <img 
                src="https://picsum.photos/seed/trail/1200/800" 
                alt="Trail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bethany-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <div className="text-white">
                  <h4 className="text-2xl font-bold">園區自然步道</h4>
                  <p className="opacity-80">在綠意盎然中漫步，與造物主對話。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Event Section */}
      <Section id="event" className="bg-bethany-olive text-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Calendar className="w-64 h-64" />
            </div>
            
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-xs tracking-[0.3em] uppercase mb-8">
                Upcoming Event
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                屏東伯大尼靈修院<br/>
                <span className="text-bethany-cream italic">獻堂感恩禮拜</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-60 uppercase tracking-widest">日期</p>
                      <p className="text-xl font-bold">2026年5月1日 (五)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-60 uppercase tracking-widest">時間</p>
                      <p className="text-xl font-bold">上午 10:00</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm opacity-60 uppercase tracking-widest">地點</p>
                      <p className="text-xl font-bold leading-relaxed">
                        屏東伯大尼靈修院<br/>
                        <span className="text-base font-normal opacity-80">屏東市盛豐路586號</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <button className="bg-white text-bethany-olive px-10 py-4 rounded-full font-bold text-lg hover:bg-bethany-cream transition-all shadow-xl">
                  我要參加
                </button>
                <p className="text-sm opacity-70 max-w-xs leading-relaxed">
                  誠摯邀請您一同見證神的榮耀，分享這份喜悅與感恩。
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <span className="text-bethany-olive font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-bethany-ink">聯絡我們</h2>
            <p className="text-bethany-ink/60 text-lg mb-12">
              如果您有任何關於聚會、靈修或空間預約的需求，歡迎隨時與我們聯繫。
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-bethany-cream flex items-center justify-center text-bethany-olive flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">院址</h4>
                  <p className="text-bethany-ink/60">900 屏東縣屏東市盛豐路586號</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-bethany-cream flex items-center justify-center text-bethany-olive flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">電話</h4>
                  <p className="text-bethany-ink/60">08-736-7264 (轉社工室)</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-bethany-cream flex items-center justify-center text-bethany-olive flex-shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">官方網站</h4>
                  <a href="https://www.bethany-pt.org/" target="_blank" className="text-bethany-olive hover:underline">www.bethany-pt.org</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-bethany-cream p-10 md:p-16 rounded-[3rem]">
            <h3 className="text-2xl font-bold mb-8">預約諮詢</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-50">姓名</label>
                  <input type="text" className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-bethany-olive outline-none" placeholder="您的姓名" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold opacity-50">電話</label>
                  <input type="tel" className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-bethany-olive outline-none" placeholder="聯絡電話" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-50">單位 / 教會</label>
                <input type="text" className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-bethany-olive outline-none" placeholder="所屬單位" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-50">預約需求</label>
                <textarea className="w-full bg-white border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-bethany-olive outline-none h-32" placeholder="請簡述您的需求（如：預計人數、日期等）"></textarea>
              </div>
              <button className="w-full bg-bethany-olive text-white py-5 rounded-2xl font-bold text-lg hover:bg-bethany-earth transition-all shadow-xl shadow-bethany-olive/20">
                送出預約申請
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-bethany-ink text-white/40 py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-serif font-bold">B</div>
              <div>
                <h4 className="text-white font-serif text-xl font-bold tracking-widest">屏東伯大尼靈修院</h4>
                <p className="text-sm">Bethany Retreat Garden</p>
              </div>
            </div>
            <div className="flex gap-12 text-sm uppercase tracking-widest font-medium">
              <a href="#about" className="hover:text-white transition-colors">關於</a>
              <a href="#services" className="hover:text-white transition-colors">服務</a>
              <a href="#facilities" className="hover:text-white transition-colors">環境</a>
              <a href="#contact" className="hover:text-white transition-colors">聯絡</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-xs">
            <p>© 2026 屏東伯大尼靈修院. All Rights Reserved.</p>
            <p className="italic">「你們得救在乎歸回安息，得力在乎平靜安穩。」— 以賽亞書 30:15</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
