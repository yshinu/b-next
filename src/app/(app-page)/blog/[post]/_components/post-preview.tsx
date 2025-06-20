'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  Github,
  Heart,
  Mail,
  MessageSquare,
  Twitter,
  Bookmark,
  Share2,
} from 'lucide-react';

import 'md-editor-rt/lib/preview.css';
import { useTheme } from 'next-themes';
import '@/app/hqbw.css';
import { MdCatalog, MdPreview } from 'md-editor-rt';

const PostPreview = () => {
  const { theme } = useTheme();
  const text =
    '## 中国封建王朝的兴衰更迭：一部宏大的历史画卷\n\n### 引言\n\n中国，一个拥有数千年连绵不绝文明史的古国，其封建社会的历史跨度之长、王朝更迭之频繁，在世界历史上绝无仅有。从公元前221年秦始-皇统一六国，建立第一个中央集权的封建王朝，到1912年清帝逊位，封建帝制终结，这长达两千多年的岁月里，数十个王朝在华夏大地上演了一幕幕兴起、鼎盛、衰落、覆灭的宏大历史剧。这些王朝的更迭，并非简单的重复，而是在螺旋式上升中推动着中国社会、经济、文化的不断演进。本篇文档将深入探讨中国封建王朝兴衰的内在逻辑、周期性规律以及其对后世的深远影响，并通过数据、图表等形式，力求全面、客观地展现这一波澜壮阔的历史进程。\n\n### 第一章：王朝更迭的周期性规律——“其兴也勃焉，其亡也忽焉”\n\n中国封建王朝的更迭呈现出明显的周期性特征，后世史家将其总结为“王朝周期律”。一个王朝的生命周期，通常会经历以下几个阶段：\n\n**王朝周期流程图**\n\n```mermaid\ngraph TD\n    A[王朝末年，天下大乱] --> B{新王朝建立};\n    B --> C[休养生息，轻徭薄赋];\n    C --> D[社会稳定，经济发展];\n    D --> E{鼎盛时期（盛世）};\n    E --> F[社会矛盾加剧，土地兼并严重];\n    F --> G[政治腐败，宦官外戚专权];\n    G --> H[天灾人祸，农民起义];\n    H --> I[地方割据，群雄并起];\n    I --> A;\n```\n\n这个流程图清晰地揭示了王朝兴衰的内在逻辑。新王朝的建立者往往是雄才大略的君主，他们吸取前朝灭亡的教训，励精图治，采取一系列恢复社会生产的措施。随着政权的巩固和发展，王朝进入鼎盛时期，国力强盛，四方来朝。然而，繁荣的表象下，危机也在悄然滋生。统治阶级的腐化、土地兼并的加剧、社会阶层的固化，都为王朝的衰败埋下了伏笔。最终，一场大规模的农民起义或内部的军事政变，成为压垮骆驼的最后一根稻草，旧的王朝覆灭，新的王朝在废墟上建立，开始又一轮的循环。\n\n### 第二章：主要封建王朝的兴衰历程与数据透视\n\n以下将选取几个具有代表性的重要王朝，对其兴衰历程进行详细的阐述，并结合关键数据进行分析。\n\n#### **中国主要封建王朝甘特图**\n\n```mermaid\ngantt\n    title 中国主要封建王朝时间轴\n    dateFormat  YYYY\n    axisFormat %Y\n\n    section 秦汉时期\n    秦朝          : crit, 221BCE, 207BCE\n    西汉          : 202BCE, 9CE\n    新朝          : 9CE, 23CE\n    东汉          : 25, 220\n\n    section 魏晋南北朝\n    三国          : 220, 280\n    西晋          : 266, 316\n    东晋          : 317, 420\n    南北朝        : 420, 589\n\n    section 隋唐宋元\n    隋朝          : 581, 618\n    唐朝          : 618, 907\n    五代十国      : 907, 960\n    北宋          : 960, 1127\n    南宋          : 1127, 1279\n    辽朝          : 916, 1125\n    金朝          : 1115, 1234\n    元朝          : 1271, 1368\n\n    section 明清时期\n    明朝          : 1368, 1644\n    清朝          : 1644, 1912\n```\n\n#### 2.1 大一统帝国的开创者——秦朝（公元前221年 - 公元前207年）\n\n  * **崛起：** 秦国地处关中，民风强悍，法家思想深入人心。自商鞅变法后，国力日强，最终在秦王嬴政的带领下，横扫六合，完成了中国历史上第一次大一统。秦始皇废分封，立郡县，书同文，车同轨，统一度量衡，对中国历史产生了深远的影响。\n  * **覆灭：** 秦朝的统治是建立在严刑酷法和繁重徭役之上的。大规模的工程建设（如长城、阿房宫、骊山陵）耗尽了民力，焚书坑儒等文化高压政策激化了社会矛盾。秦始皇死后，赵高、李斯等人发动沙丘之变，秦二世胡亥昏庸无能，最终导致陈胜、吴广起义爆发，天下响应，仅仅15年后，强秦便土崩瓦解。\n\n| **秦朝关键数据** | **数值/描述** |\n| :--- | :--- |\n| **存在时间** | 15年 |\n| **开国皇帝** | 秦始皇嬴政 |\n| **末代皇帝** | 秦王子婴 |\n| **鼎盛时期人口** | 约2000万 - 3000万 |\n| **灭亡原因** | 暴政、徭役繁重、法律严苛、农民起义 |\n\n#### 2.2 “汉承秦制”与文景之治——汉朝（公元前202年 - 公元220年）\n\n  * **崛起与鼎盛：** 汉高祖刘邦吸取秦亡教训，采取“休养生息”的国策，轻徭薄赋。文景之治时期，社会经济得到极大恢复和发展，府库充盈，人民富足，史称“文景之治”。汉武帝刘彻时期，汉朝进入鼎盛。他北击匈奴，南平百越，西南通夷，设置西域都护府，奠定了中华版图的基础。同时，他“罢黜百家，独尊儒术”，使儒家思想成为此后两千年中国封建社会的正统思想。\n  * **衰落与覆灭：** 西汉末年，外戚王莽篡权，建立新朝。新朝改革失败，引发绿林、赤眉起义。东汉建立后，虽然出现了“光武中兴”，但中期以后，外戚与宦官交替专权，政治日益腐败。土地兼并问题愈发严重，大量农民流离失所。最终，黄巾起义爆发，敲响了东汉的丧钟，随后陷入了长达数十年的军阀混战。\n\n| **汉朝关键数据** | **西汉** | **东汉** |\n| :--- | :--- | :--- |\n| **存在时间** | 211年 | 195年 |\n| **开国皇帝** | 汉高祖刘邦 | 汉光武帝刘秀 |\n| **鼎盛时期人口** | 约6000万（西汉末年） | 约5600万（东汉中期） |\n| **重要制度** | 察举制、刺史制度 | / |\n| **灭亡原因** | 外戚专权、土地兼并、农民起义 | 宦官外戚专权、土地兼并、黄巾起义 |\n\n#### 2.3 盛世华章与安史之乱——唐朝（618年 - 907年）\n\n  * **崛起与鼎盛：** 隋末农民起义后，李渊、李世民父子建立了唐朝。唐太宗李世民励精图治，虚心纳谏，开创了“贞观之治”。其后，唐高宗、武则天、唐玄宗前期，唐朝国力达到顶峰，史称“开元盛世”。此时的唐朝，政治清明，经济繁荣，文化昌盛，对外交往频繁，长安成为世界性的都会。\n  * **转折与覆灭：** “安史之乱”是唐朝由盛转衰的转折点。长达八年的战乱，极大地削弱了唐朝的中央集权，造成了藩镇割据的局面。此后，唐朝虽然又延续了一百五十余年，但已不复盛唐气象。晚唐时期，宦官专权、朋党之争、农民起义（如黄巢起义）接连不断，最终被藩镇将领朱温所篡，五代十国的大分裂时期开始。\n\n| **唐朝关键数据** | **数值/描述** |\n| :--- | :--- |\n| **存在时间** | 289年 |\n| **开国皇帝** | 唐高祖李渊 |\n| **鼎盛时期** | 贞观之治、开元盛世 |\n| **鼎盛时期人口** | 约8000万 - 9000万 |\n| **转折事件** | 安史之乱 |\n| **灭亡原因** | 藩镇割据、宦官专权、朋党之争、农民起义 |\n\n#### 2.4 经济文化的高峰与军事的羸弱——宋朝（960年 - 1279年）\n\n  * **崛起与特点：** 宋太祖赵匡胤通过“陈桥兵变”黄袍加身，结束了五代十国的混乱局面。宋朝采取“重文抑武”的国策，一方面加强了中央集权，避免了唐末的藩镇割据悲剧重演；另一方面，也导致了军队战斗力低下，“冗兵、冗官、冗费”问题严重。然而，宋代的经济和文化却达到了空前的高度，商业繁荣，城市兴起，科技发达（活字印刷术、指南针、火药三大发明在此时得到广泛应用），市民文化生活丰富多彩。\n  * **衰落与覆灭：** 宋朝自始至终面临着北方少数民族政权（辽、金、西夏）的巨大军事压力。北宋末年，政治腐败，最终被金朝所灭，史称“靖康之耻”。南宋偏安江南，虽有岳飞等名将力图恢复，但最终在蒙古铁骑的冲击下，于1279年崖山海战后灭亡。\n\n| **宋朝关键数据** | **北宋** | **南宋** |\n| :--- | :--- | :--- |\n| **存在时间** | 167年 | 152年 |\n| **开国皇帝** | 宋太祖赵匡胤 | 宋高宗赵构 |\n| **鼎盛时期人口** | 约1亿（北宋末年） | / |\n| **科技成就** | 活字印刷术、指南针、火药的广泛应用 | / |\n| **灭亡原因** | 军事实力弱、外族入侵、政治腐败 | 外族入侵 |\n\n#### 2.5 马上得天下，不能马上治天下——元朝（1271年 - 1368年）\n\n  * **崛起：** 蒙古部落在成吉思汗的带领下统一，并开始了大规模的对外征服。其孙忽必烈建立元朝，定都大都（今北京），最终灭亡南宋，统一中国。元朝的版图空前辽阔，建立了有效的驿站制度，促进了中外交通和文化交流。\n  * **覆灭：** 元朝的统治者将各族人民分为四等（蒙古人、色目人、汉人、南人），实行残酷的民族压迫和阶级剥削政策，激起了汉族人民的强烈反抗。此外，元朝统治者对汉族文化不够重视，对农业经济的破坏也十分严重。元末，政治腐败，天灾频发，最终爆发了以红巾军为主力的农民大起义，朱元璋在群雄中脱颖而出，建立了明朝，元朝统治者退回漠北。\n\n| **元朝关键数据** | **数值/描述** |\n| :--- | :--- |\n| **存在时间** | 97年 |\n| **开国皇帝** | 元世祖忽必烈 |\n| **统治特点** | 民族等级制度、行省制度 |\n| **鼎盛时期人口** | 约6000万 - 8500万 |\n| **灭亡原因** | 民族压迫、阶级矛盾、农民起义 |\n\n#### 2.6 最后的汉人王朝——明朝（1368年 - 1644年）\n\n  * **崛起与鼎盛：** 明太祖朱元璋出身贫寒，深知吏治腐败之害，因此在位期间大力整顿吏治，废除丞相制度，加强皇权。明成祖朱棣时期，派遣郑和下西洋，宣扬国威，编纂《永乐大典》，国力达到鼎盛。明朝中后期，资本主义萌芽出现，手工业和商业得到进一步发展。\n  * **衰落与覆灭：** 明朝中后期，皇帝多怠于政事，宦官专权（如王振、刘瑾、魏忠贤）成为一大顽疾。土地兼并问题依然严重，导致大量流民出现。明末，天灾不断，政府财政枯竭，无力赈灾。最终，李自成领导的农民起义军攻破北京，崇祯皇帝自缢于煤山。与此同时，关外的满洲（后金）崛起，吴三桂引清兵入关，明朝覆灭。\n\n| **明朝关键数据** | **数值/描述** |\n| :--- | :--- |\n| **存在时间** | 276年 |\n| **开国皇帝** | 明太祖朱元璋 |\n| **重要事件** | 郑和下西洋、土木堡之变 |\n| **鼎盛时期人口** | 约1.5亿 - 2亿（明末） |\n| **灭亡原因** | 宦官专权、土地兼并、农民起义、外族入侵 |\n\n#### 2.7 最后的辉煌与落幕——清朝（1644年 - 1912年）\n\n  * **崛起与鼎盛：** 清朝由满族建立，入关后，逐步统一全国。康熙、雍正、乾隆三朝，长达一百三十余年，是中国封建社会后期的最后一个盛世，史称“康乾盛世”。这一时期，清朝平定了三藩之乱，收复台湾，击败准噶尔叛乱，加强了对西藏、新疆等边疆地区的管辖，奠定了现代中国的版图。\n  * **衰落与覆灭：** 乾隆后期，清朝开始由盛转衰。吏治腐败，人口急剧增长导致人地矛盾尖锐。更重要的是，清朝统治者实行“闭关锁国”政策，错过了工业革命的浪潮，导致中国与西方的差距迅速拉大。1840年鸦片战争爆发，中国开始沦为半殖民地半封建社会。此后，太平天国运动、洋务运动、戊戌变法、义和团运动等一系列内外冲击，都未能挽救清王朝的命运。最终，1911年辛亥革命爆发，次年，宣统皇帝溥仪下诏退位，中国两千多年的封建帝制宣告结束。\n\n| **清朝关键数据** | **数值/描述** |\n| :--- | :--- |\n| **存在时间** | 268年 |\n| **开国皇帝** | （入关后）顺治帝福临 |\n| **鼎盛时期** | 康乾盛世 |\n| **鼎盛时期人口** | 约4亿（清末） |\n| **转折事件** | 鸦片战争 |\n| **灭亡原因** | 闭关锁国、制度僵化、西方列强入侵、辛亥革命 |\n\n### 第三章：王朝兴衰的深层原因探析\n\n王朝的更迭，表面上看是战争与权力的游戏，但其背后，有着深刻的经济、政治、社会和文化原因。\n\n**王朝兴衰因素分析**\n\n| **领域** | **推动王朝兴起的积极因素** | **导致王朝覆灭的消极因素** |\n| :--- | :--- | :--- |\n| **经济** | \\<ul\\>\\<li\\>轻徭薄赋，休养生息\\</li\\>\\<li\\>兴修水利，推广农业技术\\</li\\>\\<li\\>商品经济发展，城市繁荣\\</li\\>\\<li\\>国家掌握盐铁等重要资源\\</li\\>\\</ul\\> | \\<ul\\>\\<li\\>土地兼并，贫富分化严重\\</li\\>\\<li\\>赋税沉重，徭役繁多\\</li\\>\\<li\\>自然灾害频发，政府救济不力\\</li\\>\\<li\\>货币体系混乱，通货膨胀\\</li\\>\\</ul\\> |\n| **政治** | \\<ul\\>\\<li\\>建立高效的中央集权制度\\</li\\>\\<li\\>选贤任能，吏治清明\\</li\\>\\<li\\>制定开明合理的法律\\</li\\>\\<li\\>强大的军事实力，巩固边防\\</li\\>\\</ul\\> | \\<ul\\>\\<li\\>皇权旁落（外戚、宦官、权臣专权）\\</li\\>\\<li\\>官僚机构臃肿，腐败滋生\\</li\\>\\<li\\>朋党之争，内耗严重\\</li\\>\\<li\\>地方割据势力强大\\</li\\>\\</ul\\> |\n| **社会** | \\<ul\\>\\<li\\>社会阶层流动性较强（如科举制）\\</li\\>\\<li\\>社会矛盾相对缓和\\</li\\>\\<li\\>人口稳定增长\\</li\\>\\<li\\>思想文化活跃开放\\</li\\>\\</ul\\> | \\<ul\\>\\<li\\>阶级矛盾尖锐，农民起义不断\\</li\\>\\<li\\>社会阶层固化，上升通道堵塞\\</li\\>\\<li\\>人口过度增长，人地矛盾突出\\</li\\>\\<li\\>民族矛盾激化\\</li\\>\\</ul\\> |\n| **外部** | \\<ul\\>\\<li\\>周边民族关系处理得当\\</li\\>\\<li\\>开放包容的对外政策\\</li\\>\\</ul\\> | \\<ul\\>\\<li\\>外族入侵，边防压力巨大\\</li\\>\\<li\\>闭关锁国，错失发展机遇（清朝尤为典型）\\</li\\>\\</ul\\> |\n\n从上表可以看出，土地问题是贯穿中国封建社会始终的核心问题。封建王朝的经济基础是小农经济，一旦土地高度集中于地主阶级手中，大量自耕农破产沦为佃农或流民，社会的稳定便无从谈起。而政治腐败，特别是最高统治集团的腐化，则是王朝衰亡的催化剂。当一个政权失去自我革新的能力，无法有效应对内外危机时，其覆灭也就只是时间问题。\n\n### 第四章：历史的回响与启示\n\n中国封建王朝的兴衰史，不仅仅是帝王将相的家谱，更是一部民族的奋斗史和血泪史。它留给后世的，是丰富的历史遗产和深刻的经验教训。\n\n1.  **“水能载舟，亦能覆舟”**：民心向背是决定一个政权存亡的根本因素。任何脱离人民群众、与民争利的政权，都无法长久。\n2.  **制度建设的极端重要性**：一个王朝能否长治久安，很大程度上取决于其制度设计是否合理、能否有效运行。无论是秦朝的郡县制、汉朝的察举制、隋唐的科举制，还是宋朝的“重文抑武”、明朝的内阁制，都对其朝代的命运产生了决定性的影响。\n3.  **居安思危，警惕盛世危机**：许多王朝的衰败，恰恰始于其鼎盛时期。歌舞升平的表象，容易掩盖深层次的社会矛盾。统治者必须时刻保持清醒的头脑，防微杜渐。\n4.  **开放与改革是发展的动力**：汉唐的强盛，得益于其开放包容的胸襟。而清朝的衰落，则与“闭关锁国”政策造成的固步自封有直接关系。在历史发展的关键节点，能否顺应潮流，锐意改革，是决定兴衰成败的关键。\n\n### 结语\n\n“青山依旧在，几度夕阳红。”中国封建王朝的兴衰更迭，如同一幅波澜壮阔的历史长卷，充满了悲壮与辉煌。它揭示了权力、制度与人性的复杂互动，也展现了中华民族在逆境中生生不息、愈挫愈勇的强大生命力。今天，当我们回望这段漫长而厚重的历史时，不仅是为了感叹王朝的更替，更是为了从中汲取智慧和力量，以史为鉴，开创未来。两千多年的封建史，最终汇入世界历史的洪流，其兴衰的内在逻辑和深刻教训，至今仍然发人深省，具有超越时空的现实意义。';

  return (
    <main className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* 文章内容 */}
        <div className="lg:col-span-3">
          <article className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-xl shadow-sm p-6 mb-12">
            <MdPreview
              id="post-content"
              theme={theme as 'dark' | 'light'}
              value={text}
              previewTheme="hqbw"
            />

            {/* 文章标签 */}
            <div className="flex flex-wrap gap-2 mt-10 mb-8">
              {['数字人文', '科技哲学', '注意力经济', '慢生活', '精神生态'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground"
                  >
                    #{tag}
                  </span>
                )
              )}
            </div>

            {/* 互动区域 */}
            <div className="flex justify-between items-center mt-10 pt-6 border-t border-border/30">
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="flex items-center">
                  <Heart className="h-4 w-4 mr-2" />
                  <span>赞赏观点</span>
                </Button>
                <Button variant="outline" className="flex items-center">
                  <Bookmark className="h-4 w-4 mr-2" />
                  <span>收藏文章</span>
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">分享至：</span>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.09.682-.218.682-.485 0-.236-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.089 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </Button>
              </div>
            </div>
          </article>

          {/* 评论区 */}
          <Card className="bg-card/60 backdrop-blur-xl border border-border/50 rounded-xl shadow-sm">
            <CardHeader>
              <CardTitle className="font-serif flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                读者评论 (24)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* 评论1 */}
                <div className="flex gap-4">
                  <Avatar className="w-12 h-12 border-2 border-background">
                    <AvatarImage
                      src="https://i.pravatar.cc/150?u=user1"
                      alt="张明"
                    />
                    <AvatarFallback>张</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold">张明</h4>
                      <span className="text-sm text-muted-foreground">
                        2小时前
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      这篇文章深深触动了我。最近我也在尝试"数字斋戒"，每周日完全断开网络连接，最初很不适应，但现在已经成为我最期待的一天。重新找回了阅读纸质书的乐趣，也重新发现了身边的美好。
                    </p>
                    <div className="flex items-center mt-3 space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground"
                      >
                        <Heart className="h-4 w-4 mr-1" /> 42
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground"
                      >
                        回复
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 评论2 */}
                <div className="flex gap-4">
                  <Avatar className="w-12 h-12 border-2 border-background">
                    <AvatarImage
                      src="https://i.pravatar.cc/150?u=user2"
                      alt="王思颖"
                    />
                    <AvatarFallback>王</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-bold">王思颖</h4>
                      <span className="text-sm text-muted-foreground">
                        5小时前
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      作为科技行业的从业者，这篇文章给了我很多反思。我们总是追求更多的用户使用时长，但很少思考这对人的精神世界意味着什么。作者提出的人文转向确实是我们这个行业急需的。
                    </p>
                    <div className="flex items-center mt-3 space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground"
                      >
                        <Heart className="h-4 w-4 mr-1" /> 28
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground"
                      >
                        回复
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 添加评论框 */}
                <div className="pt-6 mt-8 border-t border-border/30">
                  <h4 className="font-bold mb-4">发表评论</h4>
                  <div className="space-y-4">
                    <textarea
                      className="w-full min-h-[120px] p-4 bg-muted/20 border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="分享您的想法..."
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Avatar className="w-10 h-10">
                          <AvatarImage
                            src="https://i.pravatar.cc/150?u=comment"
                            alt="Your Avatar"
                          />
                          <AvatarFallback>Y</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">
                          林思哲
                        </span>
                      </div>
                      <Button>提交评论</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 侧边栏 */}
        <aside className="lg:col-span-1 space-y-10">
          {/* 作者信息 */}
          <Card className="bg-card/60 backdrop-blur-xl border border-border/50 text-center">
            <CardContent className="p-6">
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-background">
                <AvatarImage
                  src="https://i.pravatar.cc/150?u=author"
                  alt="作者林思哲"
                />
                <AvatarFallback>林</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold font-serif">林思哲</h3>
              <p className="text-muted-foreground mb-4">思考者 & 记录者</p>
              <p className="text-sm text-muted-foreground">
                在科技与人文的交叉路口寻找灵感，记录思想旅程中的点滴感悟。
              </p>
              <div className="flex justify-center space-x-2 mt-4">
                <Button asChild variant="ghost" size="icon">
                  <a href="#">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a href="#">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a href="#">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 文章目录 */}
          <Card className="bg-card/60 backdrop-blur-xl border border-border/50 sticky top-24">
            <CardHeader>
              <CardTitle className="font-serif">本文目录</CardTitle>
            </CardHeader>
            <CardContent>
              <MdCatalog
                theme={theme as 'dark' | 'light'}
                editorId="post-content"
                scrollElement={'html'}
                offsetTop={90}
                scrollElementOffsetTop={80}
              />
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
};

export default PostPreview;
