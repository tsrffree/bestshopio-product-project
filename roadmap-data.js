/* BestShopio 规划地图。
   改 status 即可更新全站颜色：done 已完成，doing 进行中，planned 待规划。
   前台页另有 decor：supported 装修已支持，doing 进行中，planned 待规划。
   页面上改状态后点保存，会写入 GitHub 仓库，云端和本机打开的都是这一版。 */
window.ROADMAP = {
  "updated": "2026-10-13",
  "surfaces": [
    {
      "id": "merchant",
      "name": "商家后台",
      "en": "BestShopio Merchant",
      "local": "bestshopio-merchant/index.html",
      "cloud": "https://tsrffree.github.io/bestshopio-merchant/bestshopio-merchant/index.html",
      "localDir": "bestshopio-merchant/",
      "cloudDir": "https://tsrffree.github.io/bestshopio-merchant/bestshopio-merchant/",
      "blocks": [
        {
          "id": "home",
          "title": "Home（主页）",
          "groups": [
            {
              "title": "一级菜单",
              "items": [
                {
                  "id": "m-home",
                  "name": "Home",
                  "zh": "主页",
                  "status": "done",
                  "path": "#/home",
                  "note": "侧栏第一项。销售、待办和店铺切换之外的首页。"
                }
              ]
            }
          ]
        },
        {
          "id": "orders",
          "title": "Orders（订单）",
          "groups": [
            {
              "title": "订单页",
              "items": [
                {
                  "id": "m-orders",
                  "name": "Orders",
                  "zh": "订单",
                  "status": "done",
                  "path": "#/orders",
                  "nest": true,
                  "note": "侧栏只有订单这一项。发货、退款、退货、草稿单和弃单都在订单页里。弃单列表入口是 Orders > Abandoned checkouts。",
                  "children": [
                    {
                      "id": "m-shipping",
                      "name": "Shipping",
                      "zh": "发货",
                      "status": "done",
                      "path": "#/orders"
                    },
                    {
                      "id": "m-refund",
                      "name": "Refund",
                      "zh": "退款",
                      "status": "done",
                      "path": "#/orders"
                    },
                    {
                      "id": "m-return",
                      "name": "Return",
                      "zh": "退货",
                      "status": "done",
                      "path": "#/orders"
                    },
                    {
                      "id": "m-draft",
                      "name": "Draft",
                      "zh": "草稿单",
                      "status": "planned",
                      "path": "#/orders",
                      "note": "Orders > Drafts，不是侧栏二级菜单。"
                    },
                    {
                      "id": "m-abandoned",
                      "name": "Abandoned checkout",
                      "zh": "弃单",
                      "status": "doing",
                      "note": "列表在订单页。自动挽回邮件在应用 Messaging。"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "products",
          "title": "Products（产品）",
          "span": 2,
          "groups": [
            {
              "title": "商品页",
              "items": [
                {
                  "id": "m-spu",
                  "name": "SPU",
                  "zh": "商品",
                  "status": "done",
                  "path": "#/products",
                  "nest": true,
                  "note": "侧栏「产品」点进去就是商品列表。变体、分类、素材、供应商标签都是这条商品上的能力，不是二级菜单。",
                  "children": [
                    {
                      "id": "m-variant",
                      "name": "Variant",
                      "zh": "变体",
                      "status": "done",
                      "path": "#/products"
                    },
                    {
                      "id": "m-category",
                      "name": "Category",
                      "zh": "分类",
                      "status": "done",
                      "note": "商品上的标准分类，不是独立菜单。"
                    },
                    {
                      "id": "m-media",
                      "name": "Media",
                      "zh": "商品素材",
                      "status": "done",
                      "path": "#/products",
                      "note": "商品图片和视频。全店文件库在内容 → Files。"
                    },
                    {
                      "id": "m-vendor",
                      "name": "Vendor",
                      "zh": "供应商",
                      "status": "done"
                    },
                    {
                      "id": "m-metafield",
                      "name": "Product metafield",
                      "zh": "商品元字段",
                      "status": "done",
                      "path": "#/settings/metafields",
                      "note": "商品上的字段值。字段定义在设置 → Custom data。"
                    },
                    {
                      "id": "m-bundle",
                      "name": "Bundle",
                      "zh": "捆绑商品",
                      "status": "done",
                      "path": "#/bundles",
                      "note": "商品能力。原型开的是捆绑应用页。"
                    },
                    {
                      "id": "m-tag",
                      "name": "Tag",
                      "zh": "商品标签",
                      "status": "planned"
                    },
                    {
                      "id": "m-review",
                      "name": "Review",
                      "zh": "评论",
                      "status": "done",
                      "path": "#/reviews",
                      "note": "Shopify 侧栏没有评论。原型把它放在商品下，先按商品能力保留。"
                    },
                    {
                      "id": "m-sourcing",
                      "name": "商品采集",
                      "zh": "竞品跟踪 · 详情",
                      "status": "planned",
                      "note": "BestShopio 能力，不是 Shopify 菜单。"
                    },
                    {
                      "id": "m-copy-ai",
                      "name": "商品内容",
                      "zh": "AI 生成 / 优化",
                      "status": "planned"
                    },
                    {
                      "id": "m-image-ai",
                      "name": "商品图片",
                      "zh": "AI 生成 / 优化",
                      "status": "planned"
                    },
                    {
                      "id": "m-export",
                      "name": "Export / Import",
                      "zh": "导入导出",
                      "status": "planned",
                      "note": "商品导入是主入口。订单和客户也有导出，没有单独的设置菜单。"
                    }
                  ]
                }
              ]
            },
            {
              "title": "二级菜单",
              "items": [
                {
                  "id": "m-collection",
                  "name": "Collections",
                  "zh": "产品系列",
                  "status": "done",
                  "path": "#/collections"
                },
                {
                  "id": "m-inventory",
                  "name": "Inventory",
                  "zh": "库存",
                  "status": "planned",
                  "note": "多仓库存。"
                },
                {
                  "id": "m-po",
                  "name": "Purchase orders",
                  "zh": "采购订单",
                  "status": "planned"
                },
                {
                  "id": "m-transfers",
                  "name": "Transfers",
                  "zh": "转移",
                  "status": "planned",
                  "note": "库存调拨。采购收货也会生成转移。"
                },
                {
                  "id": "m-gift-cards",
                  "name": "Gift cards",
                  "zh": "礼品卡",
                  "status": "planned",
                  "note": "发放和核销在这里。过期时间和 Apple Wallet 在设置 → Gift cards。"
                }
              ]
            }
          ]
        },
        {
          "id": "customers",
          "title": "Customers（客户）",
          "groups": [
            {
              "title": "客户页与二级菜单",
              "items": [
                {
                  "id": "m-customer",
                  "name": "Customer",
                  "zh": "客户",
                  "status": "done",
                  "path": "#/customers",
                  "nest": true,
                  "note": "客户资料页。标签是客户上的能力，不是菜单。",
                  "children": [
                    {
                      "id": "m-customer-tag",
                      "name": "Tag",
                      "zh": "客户标签",
                      "status": "planned"
                    }
                  ]
                },
                {
                  "id": "m-segments",
                  "name": "Segments",
                  "zh": "细分",
                  "status": "planned"
                },
                {
                  "id": "m-companies",
                  "name": "Companies",
                  "zh": "公司",
                  "status": "planned",
                  "note": "客户下的二级菜单，B2B。截图里已展开。"
                }
              ]
            }
          ]
        },
        {
          "id": "growth",
          "title": "Growth（增长）",
          "groups": [
            {
              "title": "二级菜单",
              "items": [
                {
                  "id": "m-campaigns",
                  "name": "Campaigns",
                  "zh": "营销活动",
                  "status": "planned",
                  "note": "原 Marketing。2026 年 6 月侧栏改名为 Growth。"
                },
                {
                  "id": "m-attribution",
                  "name": "Attribution",
                  "zh": "归因",
                  "status": "planned"
                },
                {
                  "id": "m-autopilot",
                  "name": "Autopilot",
                  "zh": "活动自动驾驶",
                  "status": "planned",
                  "note": "Growth > Autopilot。营销自动化已挪到应用 Messaging。"
                }
              ]
            }
          ]
        },
        {
          "id": "discounts",
          "title": "Discounts（折扣）",
          "groups": [
            {
              "title": "折扣页",
              "items": [
                {
                  "id": "m-discounts",
                  "name": "Discounts",
                  "zh": "折扣",
                  "status": "done",
                  "path": "#/discounts",
                  "nest": true,
                  "note": "侧栏只有折扣。四种折扣是这一页里的类型。",
                  "children": [
                    {
                      "id": "m-product-discount",
                      "name": "Product discount",
                      "zh": "商品折扣",
                      "status": "done",
                      "path": "#/discounts"
                    },
                    {
                      "id": "m-order-discount",
                      "name": "Order discount",
                      "zh": "订单折扣",
                      "status": "done",
                      "path": "#/discounts"
                    },
                    {
                      "id": "m-free-shipping",
                      "name": "Free shipping",
                      "zh": "免邮",
                      "status": "done",
                      "path": "#/discounts"
                    },
                    {
                      "id": "m-bxgy",
                      "name": "Buy X get Y",
                      "zh": "买 X 送 Y",
                      "status": "planned",
                      "path": "#/discounts"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "id": "content",
          "title": "Content（内容）",
          "groups": [
            {
              "title": "二级菜单",
              "items": [
                {
                  "id": "m-metaobjects",
                  "name": "Metaobjects",
                  "zh": "元对象条目",
                  "status": "planned",
                  "note": "Content > Metaobjects。定义在设置 → Custom data。"
                },
                {
                  "id": "m-files",
                  "name": "Files",
                  "zh": "文件",
                  "status": "planned",
                  "note": "全店文件库。商品图片本身在商品页。"
                },
                {
                  "id": "m-menu",
                  "name": "Menus",
                  "zh": "菜单",
                  "status": "done",
                  "path": "#/menu",
                  "note": "Content > Menus。已从在线商店挪到内容。"
                },
                {
                  "id": "m-blog",
                  "name": "Blog posts",
                  "zh": "博客文章",
                  "status": "done",
                  "path": "#/blog"
                },
                {
                  "id": "m-page",
                  "name": "Pages",
                  "zh": "页面",
                  "status": "done",
                  "path": "#/page",
                  "note": "自定义页面，如 About。政策文本在设置 → Policies。按 Content > Pages 归类。"
                }
              ]
            }
          ]
        },
        {
          "id": "markets",
          "title": "Markets（市场）",
          "groups": [
            {
              "title": "二级菜单",
              "items": [
                {
                  "id": "m-market",
                  "name": "Markets",
                  "zh": "市场",
                  "status": "planned",
                  "note": "已从设置提升为一级菜单。售卖币种、各市场语言在这里。"
                },
                {
                  "id": "m-rollouts",
                  "name": "Rollouts",
                  "zh": "灰度发布",
                  "status": "planned",
                  "note": "Markets > Rollouts，也可从主题进入。"
                }
              ]
            }
          ]
        },
        {
          "id": "finance",
          "title": "Finance（财务）",
          "groups": [
            {
              "title": "二级菜单",
              "items": [
                {
                  "id": "m-finance",
                  "name": "Finance",
                  "zh": "财务总览",
                  "status": "planned",
                  "note": "Balance、Capital、Credit 在这一页，不是各自的侧栏菜单。"
                },
                {
                  "id": "m-payouts",
                  "name": "Payouts",
                  "zh": "收款",
                  "status": "planned",
                  "note": "Finance > Payouts。经营财务报表仍在分析里。"
                }
              ]
            }
          ]
        },
        {
          "id": "analytics",
          "title": "Analytics（分析）",
          "span": 2,
          "groups": [
            {
              "title": "二级菜单",
              "items": [
                {
                  "id": "m-overview",
                  "name": "Analytics",
                  "zh": "分析总览",
                  "status": "done",
                  "path": "#/analytics"
                },
                {
                  "id": "m-reports",
                  "name": "Reports",
                  "zh": "报表",
                  "status": "doing",
                  "path": "#/analytics",
                  "nest": true,
                  "note": "具体报表都在 Analytics > Reports 里，侧栏不再往下拆。",
                  "children": [
                    {
                      "id": "m-yearbook",
                      "name": "数据年鉴",
                      "zh": "年报",
                      "status": "planned",
                      "path": "#/analytics"
                    },
                    {
                      "id": "m-sale-report",
                      "name": "Sale report",
                      "zh": "销售报表",
                      "status": "done",
                      "path": "#/analytics"
                    },
                    {
                      "id": "m-order-report",
                      "name": "Order report",
                      "zh": "订单报表",
                      "status": "planned",
                      "path": "#/analytics"
                    },
                    {
                      "id": "m-customer-report",
                      "name": "Customer report",
                      "zh": "客户报表",
                      "status": "planned",
                      "path": "#/analytics"
                    },
                    {
                      "id": "m-behavior-report",
                      "name": "Behavior report",
                      "zh": "行为报表",
                      "status": "planned",
                      "path": "#/analytics"
                    },
                    {
                      "id": "m-finance-report",
                      "name": "Finance report",
                      "zh": "财务报表",
                      "status": "planned",
                      "path": "#/analytics"
                    },
                    {
                      "id": "m-product-report",
                      "name": "Product report",
                      "zh": "商品报表",
                      "status": "planned",
                      "path": "#/analytics"
                    },
                    {
                      "id": "m-marketing-report",
                      "name": "Marketing report",
                      "zh": "营销报表",
                      "status": "planned",
                      "path": "#/analytics"
                    },
                    {
                      "id": "m-custom-report",
                      "name": "自助创建 report",
                      "zh": "自定义报表",
                      "status": "planned"
                    },
                    {
                      "id": "m-chart-ui",
                      "name": "Chart UI",
                      "zh": "图表",
                      "status": "planned"
                    },
                    {
                      "id": "m-diagnosis",
                      "name": "店铺诊断",
                      "zh": "经营诊断",
                      "status": "planned"
                    }
                  ]
                },
                {
                  "id": "m-live",
                  "name": "Live view",
                  "zh": "实时数据",
                  "status": "planned",
                  "path": "#/analytics",
                  "note": "Analytics > Live View。"
                }
              ]
            }
          ]
        },
        {
          "id": "channel",
          "title": "Sales channels（销售渠道）",
          "span": 2,
          "groups": [
            {
              "title": "在线商店",
              "items": [
                {
                  "id": "m-themes",
                  "name": "Themes",
                  "zh": "主题",
                  "status": "doing",
                  "path": "#/online-store",
                  "nest": true,
                  "note": "Online Store > Themes。首页、商品详情、购物车这些是主题模板，不是侧栏菜单。",
                  "children": [
                    {
                      "id": "m-theme-home",
                      "name": "Home",
                      "zh": "首页模板",
                      "status": "done",
                      "path": "#/online-store"
                    },
                    {
                      "id": "m-theme-collections",
                      "name": "Collections list",
                      "zh": "全部系列模板",
                      "status": "done",
                      "path": "#/online-store",
                      "note": "装修模板 list-collections，对应前台 /collections。"
                    },
                    {
                      "id": "m-theme-collection",
                      "name": "Collection",
                      "zh": "系列页模板",
                      "status": "done",
                      "path": "#/online-store",
                      "note": "装修模板 collection，对应前台 /collections/{handle}。"
                    },
                    {
                      "id": "m-pdp",
                      "name": "PDP",
                      "zh": "商品详情模板",
                      "status": "planned",
                      "path": "#/online-store"
                    },
                    {
                      "id": "m-theme-cart",
                      "name": "Cart",
                      "zh": "购物车模板",
                      "status": "planned",
                      "path": "#/online-store"
                    },
                    {
                      "id": "m-theme-checkout",
                      "name": "Checkout",
                      "zh": "结账模板",
                      "status": "done",
                      "path": "#/online-store"
                    },
                    {
                      "id": "m-thankyou",
                      "name": "Thank you",
                      "zh": "感谢页模板",
                      "status": "done",
                      "path": "#/online-store"
                    },
                    {
                      "id": "m-theme-blog",
                      "name": "Blog",
                      "zh": "博客模板",
                      "status": "planned",
                      "path": "#/online-store"
                    },
                    {
                      "id": "m-theme-page",
                      "name": "Page",
                      "zh": "页面模板",
                      "status": "planned",
                      "path": "#/online-store"
                    },
                    {
                      "id": "m-search",
                      "name": "Search",
                      "zh": "搜索模板",
                      "status": "planned",
                      "path": "#/online-store"
                    },
                    {
                      "id": "m-theme-account",
                      "name": "Customer account",
                      "zh": "个人中心模板",
                      "status": "planned",
                      "path": "#/online-store"
                    },
                    {
                      "id": "m-theme-market",
                      "name": "模板市场",
                      "zh": "主题模板",
                      "status": "planned"
                    },
                    {
                      "id": "m-ai-site",
                      "name": "AI 建站",
                      "zh": "自动生成站点",
                      "status": "planned",
                      "note": "BestShopio 能力，包在主题里。"
                    }
                  ]
                },
                {
                  "id": "m-os-preferences",
                  "name": "Preferences",
                  "zh": "在线商店偏好",
                  "status": "planned",
                  "note": "标题、描述、密码保护和追踪代码。Online Store > Preferences。"
                }
              ]
            },
            {
              "title": "侧栏已有",
              "items": [
                {
                  "id": "m-online-store",
                  "name": "Online Store",
                  "zh": "在线商店",
                  "status": "done",
                  "path": "#/online-store",
                  "note": "新店默认销售渠道。"
                },
                {
                  "id": "m-agentic",
                  "name": "Agentic",
                  "zh": "智能体",
                  "status": "planned",
                  "note": "销售渠道 > 智能体。管理商品出现在哪些 AI 购物渠道。"
                }
              ]
            },
            {
              "title": "安装后出现",
              "items": [
                {
                  "id": "m-google",
                  "name": "Google",
                  "zh": "Google 渠道",
                  "status": "done",
                  "path": "#/google",
                  "note": "在设置 → 应用和销售渠道里添加后，才出现在侧栏。"
                },
                {
                  "id": "m-facebook",
                  "name": "Facebook & Instagram",
                  "zh": "Meta 店铺",
                  "status": "planned",
                  "path": "#/facebook"
                },
                {
                  "id": "m-pinterest",
                  "name": "Pinterest",
                  "zh": "Pinterest",
                  "status": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "apps",
          "title": "Apps（应用）",
          "span": 2,
          "groups": [
            {
              "title": "基础功能",
              "items": [
                {
                  "id": "m-tracking",
                  "name": "Tracking 工具",
                  "zh": "对接 IMS",
                  "status": "planned"
                },
                {
                  "id": "m-subscription",
                  "name": "Subscription",
                  "zh": "订阅",
                  "status": "done",
                  "path": "#/subscriptions"
                },
                {
                  "id": "m-bestcheckout",
                  "name": "BestCheckout",
                  "zh": "结账增长",
                  "status": "done",
                  "path": "https://zjc66666-pm.github.io/BestCheckout/app/#/home",
                  "tag": "BestCheckout"
                },
                {
                  "id": "m-search-app",
                  "name": "Search",
                  "zh": "搜索",
                  "status": "planned"
                },
                {
                  "id": "m-cs",
                  "name": "Customer service",
                  "zh": "客服",
                  "status": "planned"
                },
                {
                  "id": "m-seo",
                  "name": "SEO",
                  "zh": "搜索引擎优化",
                  "status": "planned"
                },
                {
                  "id": "m-reco",
                  "name": "Recommendation",
                  "zh": "推荐",
                  "status": "planned"
                },
                {
                  "id": "m-ab",
                  "name": "A/B Test",
                  "zh": "实验",
                  "status": "planned"
                },
                {
                  "id": "m-translate",
                  "name": "Translate & Adapt",
                  "zh": "翻译适配",
                  "status": "planned"
                },
                {
                  "id": "m-messaging",
                  "name": "Messaging",
                  "zh": "消息",
                  "status": "planned",
                  "note": "营销自动化在这个应用里，不再挂在增长下面。"
                }
              ]
            },
            {
              "title": "广告对接",
              "items": [
                {
                  "id": "m-applovin",
                  "name": "AppLovin",
                  "zh": "广告",
                  "status": "planned"
                },
                {
                  "id": "m-newsbreak",
                  "name": "NewsBreak",
                  "zh": "广告",
                  "status": "planned"
                },
                {
                  "id": "m-taboola",
                  "name": "Taboola Pixel",
                  "zh": "像素",
                  "status": "planned"
                },
                {
                  "id": "m-clarity",
                  "name": "Microsoft Clarity",
                  "zh": "行为洞察",
                  "status": "planned",
                  "path": "#/clarity"
                }
              ]
            },
            {
              "title": "发货工具",
              "items": [
                {
                  "id": "m-oms",
                  "name": "对接 OMS",
                  "zh": "发货",
                  "status": "planned"
                },
                {
                  "id": "m-bestfulfill",
                  "name": "Bestfulfill",
                  "zh": "履约",
                  "status": "planned"
                },
                {
                  "id": "m-erp",
                  "name": "外部 ERP",
                  "zh": "发货平台",
                  "status": "planned"
                }
              ]
            },
            {
              "title": "迁移工具",
              "items": [
                {
                  "id": "m-shopify-move",
                  "name": "Shopify 一键迁移",
                  "zh": "迁店",
                  "status": "planned"
                },
                {
                  "id": "m-shopline-move",
                  "name": "Shopline 一键迁移",
                  "zh": "迁店",
                  "status": "planned"
                }
              ]
            },
            {
              "title": "内部 App 接入",
              "items": [
                {
                  "id": "m-bestreach",
                  "name": "BestReach",
                  "zh": "营销工具",
                  "status": "planned"
                },
                {
                  "id": "m-antspy",
                  "name": "AntSpy",
                  "zh": "内部应用",
                  "status": "planned"
                },
                {
                  "id": "m-bestcreative",
                  "name": "BestCreative",
                  "zh": "创意",
                  "status": "planned"
                }
              ]
            },
            {
              "title": "外部 App 接入",
              "items": [
                {
                  "id": "m-openapi",
                  "name": "OpenAPI",
                  "zh": "开放接口",
                  "status": "planned"
                },
                {
                  "id": "m-webhook",
                  "name": "Webhook",
                  "zh": "事件回调",
                  "status": "planned"
                },
                {
                  "id": "m-app-sdk",
                  "name": "App SDK",
                  "zh": "应用 SDK",
                  "status": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "settings",
          "title": "Settings（设置）",
          "span": 2,
          "groups": [
            {
              "title": "设置菜单",
              "items": [
                {
                  "id": "m-basic",
                  "name": "Store details",
                  "zh": "商店详情",
                  "status": "done",
                  "path": "#/settings/base",
                  "nest": true,
                  "note": "店名、地址、默认货币、单位和时区。",
                  "children": [
                    {
                      "id": "m-currency",
                      "name": "Currency",
                      "zh": "店铺默认货币",
                      "status": "done",
                      "path": "#/settings/currency",
                      "note": "售卖币种在市场。这一项是原型里的货币设置页。"
                    }
                  ]
                },
                {
                  "id": "m-billing",
                  "name": "Plan",
                  "zh": "套餐",
                  "status": "planned",
                  "note": "侧栏底部「选择套餐」。原来放在开店里的 Billing。"
                },
                {
                  "id": "m-users",
                  "name": "Users",
                  "zh": "用户和权限",
                  "status": "done",
                  "path": "#/settings/staff",
                  "nest": true,
                  "note": "2026 起后台和 POS 的权限都在设置 → 用户。",
                  "children": [
                    {
                      "id": "m-staff",
                      "name": "Staff",
                      "zh": "员工",
                      "status": "done",
                      "path": "#/settings/staff"
                    },
                    {
                      "id": "m-role",
                      "name": "Role",
                      "zh": "角色",
                      "status": "done",
                      "path": "#/settings/roles"
                    }
                  ]
                },
                {
                  "id": "m-payments",
                  "name": "Payments",
                  "zh": "支付",
                  "status": "done",
                  "path": "#/settings/payments",
                  "nest": true,
                  "note": "支付服务商是这一页上的能力，不是各自的菜单。",
                  "children": [
                    {
                      "id": "m-airwallex",
                      "name": "Airwallex",
                      "zh": "支付",
                      "status": "done",
                      "path": "#/settings/payments"
                    },
                    {
                      "id": "m-paypal",
                      "name": "Paypal",
                      "zh": "支付",
                      "status": "done",
                      "path": "#/settings/payments"
                    },
                    {
                      "id": "m-stripe",
                      "name": "Stripe",
                      "zh": "支付",
                      "status": "done",
                      "path": "#/settings/payments"
                    },
                    {
                      "id": "m-adyen",
                      "name": "Adyen",
                      "zh": "支付",
                      "status": "planned",
                      "path": "#/settings/payments"
                    },
                    {
                      "id": "m-zyla",
                      "name": "Zyla",
                      "zh": "支付",
                      "status": "planned",
                      "path": "#/settings/payments"
                    },
                    {
                      "id": "m-checkout-com",
                      "name": "Checkout.com",
                      "zh": "支付",
                      "status": "planned",
                      "path": "#/settings/payments"
                    }
                  ]
                },
                {
                  "id": "m-checkout-setting",
                  "name": "Checkout",
                  "zh": "结账和客户账户",
                  "status": "done",
                  "path": "#/settings/checkout"
                },
                {
                  "id": "m-ship-rates",
                  "name": "Shipping and delivery",
                  "zh": "配送",
                  "status": "done",
                  "path": "#/settings/shipping-rates"
                },
                {
                  "id": "m-tax",
                  "name": "Taxes and duties",
                  "zh": "税费",
                  "status": "planned"
                },
                {
                  "id": "m-ship-locations",
                  "name": "Locations",
                  "zh": "地点",
                  "status": "planned",
                  "path": "#/settings/shippable-locations"
                },
                {
                  "id": "m-domains",
                  "name": "Domains",
                  "zh": "域名",
                  "status": "done",
                  "path": "#/settings/domains"
                },
                {
                  "id": "m-brand",
                  "name": "Brand",
                  "zh": "品牌",
                  "status": "planned",
                  "note": "设置里的品牌资产，截图未展开。"
                },
                {
                  "id": "m-notifications",
                  "name": "Notifications",
                  "zh": "通知",
                  "status": "done",
                  "path": "#/settings/notifications"
                },
                {
                  "id": "m-custom-data",
                  "name": "Custom data",
                  "zh": "自定义数据",
                  "status": "done",
                  "path": "#/settings/metafields",
                  "nest": true,
                  "note": "字段和元对象的定义在设置。元对象条目在内容。",
                  "children": [
                    {
                      "id": "m-settings-metafield",
                      "name": "Metafield definitions",
                      "zh": "元字段定义",
                      "status": "done",
                      "path": "#/settings/metafields"
                    },
                    {
                      "id": "m-settings-metaobjects",
                      "name": "Metaobject definitions",
                      "zh": "元对象定义",
                      "status": "planned"
                    }
                  ]
                },
                {
                  "id": "m-languages",
                  "name": "Languages",
                  "zh": "语言",
                  "status": "planned",
                  "path": "#/settings/base",
                  "note": "商店语言。各市场用哪一种语言在市场里。"
                },
                {
                  "id": "m-policy",
                  "name": "Policies",
                  "zh": "政策",
                  "status": "planned"
                },
                {
                  "id": "m-privacy",
                  "name": "Customer privacy",
                  "zh": "客户隐私",
                  "status": "planned"
                },
                {
                  "id": "m-apps-settings",
                  "name": "Apps and sales channels",
                  "zh": "应用和销售渠道",
                  "status": "planned",
                  "note": "在这里安装或卸下渠道和应用，侧栏才会出现对应入口。"
                }
              ]
            }
          ]
        },
        {
          "id": "account-portal",
          "title": "账号门户",
          "groups": [
            {
              "title": "不在店内菜单",
              "items": [
                {
                  "id": "m-sso",
                  "name": "SSO login",
                  "zh": "统一登录",
                  "status": "done",
                  "path": "account/signin.html",
                  "note": "进店之前的账号门户，不是 Shopify 侧栏。"
                },
                {
                  "id": "m-multi-store",
                  "name": "Multi-store mgmt",
                  "zh": "多店管理",
                  "status": "done",
                  "path": "account/stores.html",
                  "note": "对应侧栏底部的店铺切换。管理页在账号门户。"
                },
                {
                  "id": "m-one-click",
                  "name": "One-click launch store",
                  "zh": "一键开店",
                  "status": "done",
                  "path": "account/create-store.html",
                  "tag": "BestShopio"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "saas",
      "name": "SaaS 中台",
      "en": "BestShopio Platform",
      "local": "bestshopio%20saas/prototype/index.html",
      "cloud": "https://tsrffree.github.io/bestshopio-saas/",
      "localDir": "bestshopio%20saas/prototype/",
      "cloudDir": "https://tsrffree.github.io/bestshopio-saas/",
      "blocks": [
        {
          "id": "base-info",
          "title": "基础信息",
          "groups": [
            {
              "title": "主数据",
              "items": [
                {
                  "id": "s-category",
                  "name": "分类管理",
                  "zh": "类目",
                  "status": "done",
                  "path": "#/category"
                },
                {
                  "id": "s-menu",
                  "name": "菜单管理",
                  "zh": "商家菜单",
                  "status": "doing",
                  "path": "#/menu"
                },
                {
                  "id": "s-address",
                  "name": "地址库",
                  "zh": "地址主数据",
                  "status": "planned"
                },
                {
                  "id": "s-attrs",
                  "name": "属性管理",
                  "zh": "属性",
                  "status": "planned"
                },
                {
                  "id": "s-plans",
                  "name": "套餐管理",
                  "zh": "Basic / Plus 等",
                  "status": "planned",
                  "path": "#/plans"
                },
                {
                  "id": "s-agency",
                  "name": "代理机构管理",
                  "zh": "代理",
                  "status": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "store-admin",
          "title": "店铺管理",
          "groups": [
            {
              "title": "店铺",
              "items": [
                {
                  "id": "s-users",
                  "name": "用户管理",
                  "zh": "账号",
                  "status": "done",
                  "path": "#/account"
                },
                {
                  "id": "s-stores",
                  "name": "多店铺管理",
                  "zh": "店铺",
                  "status": "done",
                  "path": "#/stores"
                }
              ]
            }
          ]
        },
        {
          "id": "store-guide",
          "title": "店铺引导",
          "groups": [
            {
              "title": "引导",
              "items": [
                {
                  "id": "s-notice",
                  "name": "公告",
                  "zh": "站内公告",
                  "status": "doing"
                },
                {
                  "id": "s-help",
                  "name": "帮助中心",
                  "zh": "Help Center",
                  "status": "doing",
                  "path": "#/content"
                },
                {
                  "id": "s-tickets",
                  "name": "工单客服",
                  "zh": "工单",
                  "status": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "billing",
          "title": "计费 & 抽成结算",
          "groups": [
            {
              "title": "结算",
              "items": [
                {
                  "id": "s-charge",
                  "name": "扣费",
                  "zh": "账单扣费",
                  "status": "planned"
                },
                {
                  "id": "s-commission",
                  "name": "交易抽成 / 分账",
                  "zh": "结算",
                  "status": "planned"
                },
                {
                  "id": "s-invoice",
                  "name": "发票 / 对账",
                  "zh": "对账",
                  "status": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "insights",
          "title": "平台数据看板",
          "groups": [
            {
              "title": "看板",
              "items": [
                {
                  "id": "s-dashboard",
                  "name": "平台数据看板",
                  "zh": "经营看板",
                  "status": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "app-admin",
          "title": "App Store 管理",
          "groups": [
            {
              "title": "应用",
              "items": [
                {
                  "id": "s-appstore",
                  "name": "App Store 管理",
                  "zh": "应用上架",
                  "status": "planned"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "storefront",
      "name": "前台",
      "en": "BestShopio Storefront",
      "local": "bestshopio%20storefront/index.html",
      "cloud": "https://tsrffree.github.io/bestshopio-storefront/",
      "localDir": "bestshopio%20storefront/",
      "cloudDir": "https://tsrffree.github.io/bestshopio-storefront/",
      "blocks": [
        {
          "id": "home",
          "title": "Home（首页）",
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-home",
                  "name": "Home",
                  "zh": "首页",
                  "status": "done",
                  "path": "home.html",
                  "note": "Shopify 路径 / 。Aura 首页：轮播、图文、精选商品、评价、FAQ 和订阅。",
                  "decor": "supported"
                }
              ]
            }
          ]
        },
        {
          "id": "product",
          "title": "Product（商品详情）",
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-product",
                  "name": "PDP",
                  "zh": "商品详情",
                  "status": "done",
                  "note": "Shopify 路径 /products/{handle}。原型还没有这一页，先占位。",
                  "decor": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "collections",
          "title": "Collections（系列）",
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-collections-list",
                  "name": "Collections",
                  "zh": "全部系列",
                  "status": "done",
                  "path": "collections.html",
                  "note": "Shopify 装修模板 list-collections，路径 /collections。上报 page type 为 list-collections。",
                  "decor": "supported"
                },
                {
                  "id": "f-collection",
                  "name": "Collection",
                  "zh": "系列页",
                  "status": "done",
                  "path": "collection.html",
                  "note": "Shopify 装修模板 collection，路径 /collections/{handle}。上报 page type 为 collection，并另发 collection_viewed。带标签的 /collections/{handle}/{tag} 也走这一页。",
                  "decor": "supported"
                }
              ]
            }
          ]
        },
        {
          "id": "search",
          "title": "Search（搜索）",
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-search",
                  "name": "Search",
                  "zh": "搜索",
                  "status": "done",
                  "note": "Shopify 路径 /search。原型还没有这一页，先占位。",
                  "decor": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "cart",
          "title": "Cart（购物车）",
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-cart",
                  "name": "Cart",
                  "zh": "购物车",
                  "status": "done",
                  "path": "?view=cart-page",
                  "nest": true,
                  "nestLabel": "三级路径",
                  "note": "Shopify 路径 /cart。购物车页和弹窗购物车是同一页的两种形态。",
                  "children": [
                    {
                      "id": "f-cart-page",
                      "name": "Cart page",
                      "zh": "购物车页",
                      "status": "done",
                      "path": "?view=cart-page",
                      "note": "整页购物车：普通商品、变体、组合包和订阅。",
                      "decor": "planned"
                    },
                    {
                      "id": "f-cart-drawer",
                      "name": "Cart drawer",
                      "zh": "弹窗购物车",
                      "status": "done",
                      "path": "?view=cart-drawer",
                      "note": "侧边购物车：移动端空间、组合包子项和折扣展示。",
                      "decor": "planned"
                    }
                  ],
                  "decor": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "checkout",
          "title": "Checkout（结账）",
          "span": 2,
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-checkout",
                  "name": "Checkout",
                  "zh": "结账",
                  "status": "done",
                  "path": "?view=checkout",
                  "nest": true,
                  "nestLabel": "三级路径",
                  "note": "二级路径 checkouts。当前地址 /checkouts/cn/{token}，旧店还有 /{店铺数字 ID}/checkouts/{token}。原型里是 ?view=checkout：结算摘要、支付表单、订阅和组合包。",
                  "children": [
                    {
                      "id": "f-processing",
                      "name": "Processing",
                      "zh": "支付处理中",
                      "status": "done",
                      "note": "路径 /checkouts/cn/{token}/processing。付款提交后、感谢页之前。原型还没有，先占位。",
                      "decor": "supported"
                    },
                    {
                      "id": "f-thankyou",
                      "name": "Thank you",
                      "zh": "感谢页",
                      "status": "done",
                      "note": "路径 /checkouts/cn/{token}/thank_you，新店也可能写成 /thank-you。原型的 checkout 还没有这一步，先占位。",
                      "decor": "supported"
                    },
                    {
                      "id": "f-recover",
                      "name": "Recover",
                      "zh": "弃单恢复",
                      "status": "doing",
                      "note": "路径 /{店铺数字 ID}/checkouts/ac/{cart_token}/recover?key={key}。打开后回到这次没付完的结账。原型还没有，先占位。",
                      "decor": "doing"
                    }
                  ],
                  "decor": "supported"
                }
              ]
            },
            {
              "title": "同页步骤",
              "items": [
                {
                  "id": "f-step-contact",
                  "name": "Contact",
                  "zh": "联系方式",
                  "status": "done",
                  "note": "不是新路径，停在结账地址上，用 ?step=contact_information。原型还没按步骤拆开，先占位。",
                  "decor": "supported"
                },
                {
                  "id": "f-step-shipping",
                  "name": "Shipping",
                  "zh": "配送方式",
                  "status": "done",
                  "note": "同一条结账地址，?step=shipping_method。虚拟商品会跳过。",
                  "decor": "supported"
                },
                {
                  "id": "f-step-payment",
                  "name": "Payment",
                  "zh": "支付",
                  "status": "done",
                  "note": "同一条结账地址，?step=payment_method。",
                  "decor": "supported"
                },
                {
                  "id": "f-step-review",
                  "name": "Review",
                  "zh": "下单前确认",
                  "status": "done",
                  "note": "同一条结账地址，?step=review。后台打开才出现。",
                  "decor": "supported"
                },
                {
                  "id": "f-step-stock",
                  "name": "Stock problems",
                  "zh": "库存不足",
                  "status": "done",
                  "note": "结账过程中的 stock_problems。库存不够时出现。",
                  "decor": "supported"
                },
                {
                  "id": "f-step-forward",
                  "name": "Forward",
                  "zh": "站外支付",
                  "status": "done",
                  "note": "结账过程中的 forward。跳去 PayPal 等站外支付。",
                  "decor": "supported"
                }
              ]
            }
          ]
        },
        {
          "id": "order-status",
          "title": "Order status（订单状态）",
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-order-status",
                  "name": "Order status",
                  "zh": "订单状态",
                  "status": "done",
                  "note": "二级路径 orders，地址 /orders/{order_token}，有时带 /authenticate?key=。和结账、账户里的订单详情都不是同一页。顾客再打开感谢页，或从确认邮件进来，会落到这里。原型还没有，先占位。",
                  "decor": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "pages",
          "title": "Pages（页面）",
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-pages",
                  "name": "Pages",
                  "zh": "自定义页面",
                  "status": "done",
                  "nest": true,
                  "nestLabel": "三级路径",
                  "note": "Shopify 路径 /pages/{handle}。About、Contact 都是这一路径下的不同页面。原型还没有，先占位。",
                  "children": [
                    {
                      "id": "f-about",
                      "name": "About",
                      "zh": "关于我们",
                      "status": "done",
                      "decor": "planned"
                    },
                    {
                      "id": "f-contact",
                      "name": "Contact",
                      "zh": "联系我们",
                      "status": "done",
                      "decor": "planned"
                    }
                  ],
                  "decor": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "blog",
          "title": "Blog（博客）",
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-blog",
                  "name": "Blog",
                  "zh": "博客",
                  "status": "done",
                  "nest": true,
                  "nestLabel": "三级路径",
                  "note": "Shopify 路径 /blogs/{blog}。原型还没有，先占位。",
                  "children": [
                    {
                      "id": "f-article",
                      "name": "Article",
                      "zh": "文章",
                      "status": "done",
                      "note": "Shopify 路径 /blogs/{blog}/{article}。",
                      "decor": "planned"
                    }
                  ],
                  "decor": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "account",
          "title": "Account（账户）",
          "span": 2,
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-account",
                  "name": "Account",
                  "zh": "账户",
                  "status": "done",
                  "path": "?view=account-orders",
                  "nest": true,
                  "nestLabel": "三级路径",
                  "note": "登录和注册的三级路径不同，二级路径都是账户，所以收在这一页下面。订单、收藏、地址簿也是同一二级路径下的三级路径。",
                  "children": [
                    {
                      "id": "f-orders",
                      "name": "My orders",
                      "zh": "我的订单",
                      "status": "done",
                      "path": "?view=account-orders",
                      "decor": "planned"
                    },
                    {
                      "id": "f-collections",
                      "name": "Collections",
                      "zh": "收藏",
                      "status": "done",
                      "path": "?view=account-collections",
                      "decor": "planned"
                    },
                    {
                      "id": "f-address",
                      "name": "Address book",
                      "zh": "地址簿",
                      "status": "done",
                      "path": "?view=account-address",
                      "decor": "planned"
                    },
                    {
                      "id": "f-address-add",
                      "name": "Add address",
                      "zh": "新增地址",
                      "status": "done",
                      "path": "?view=account-address-add",
                      "decor": "planned"
                    },
                    {
                      "id": "f-address-delete",
                      "name": "Delete address",
                      "zh": "删除地址",
                      "status": "done",
                      "path": "?view=account-address-delete",
                      "decor": "planned"
                    },
                    {
                      "id": "f-password",
                      "name": "Password",
                      "zh": "修改密码",
                      "status": "done",
                      "path": "?view=account-password",
                      "decor": "planned"
                    },
                    {
                      "id": "f-signout",
                      "name": "Sign out",
                      "zh": "退出登录",
                      "status": "done",
                      "path": "?view=account-signout",
                      "decor": "planned"
                    },
                    {
                      "id": "f-order-detail",
                      "name": "Order detail",
                      "zh": "订单详情",
                      "status": "done",
                      "path": "?view=order-detail",
                      "decor": "planned"
                    },
                    {
                      "id": "f-order-cancel",
                      "name": "Cancel order",
                      "zh": "取消订单",
                      "status": "done",
                      "path": "?view=order-cancel",
                      "decor": "planned"
                    },
                    {
                      "id": "f-review",
                      "name": "Review",
                      "zh": "评价",
                      "status": "done",
                      "path": "?view=order-review-modal",
                      "decor": "planned"
                    },
                    {
                      "id": "f-login",
                      "name": "Login",
                      "zh": "登录",
                      "status": "done",
                      "path": "?view=login",
                      "note": "登录弹层。",
                      "decor": "planned"
                    },
                    {
                      "id": "f-login-modal",
                      "name": "Login modal",
                      "zh": "登录弹层",
                      "status": "done",
                      "path": "?view=login",
                      "decor": "planned"
                    },
                    {
                      "id": "f-register",
                      "name": "Register",
                      "zh": "注册",
                      "status": "done",
                      "path": "?view=register",
                      "note": "注册弹层。",
                      "decor": "planned"
                    },
                    {
                      "id": "f-reset",
                      "name": "Reset password",
                      "zh": "找回密码",
                      "status": "done",
                      "path": "?view=reset-password",
                      "decor": "planned"
                    }
                  ],
                  "decor": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "policies",
          "title": "Policies（政策）",
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-policies",
                  "name": "Policies",
                  "zh": "政策",
                  "status": "done",
                  "nest": true,
                  "nestLabel": "三级路径",
                  "note": "Shopify 路径 /policies/{policy}。页脚里的政策链接还指向系列页，原型没有单独页面，先占位。",
                  "children": [
                    {
                      "id": "f-policy-privacy",
                      "name": "Privacy",
                      "zh": "隐私政策",
                      "status": "done",
                      "decor": "planned"
                    },
                    {
                      "id": "f-policy-refund",
                      "name": "Refund",
                      "zh": "退款政策",
                      "status": "done",
                      "decor": "planned"
                    },
                    {
                      "id": "f-policy-terms",
                      "name": "Terms",
                      "zh": "服务条款",
                      "status": "done",
                      "decor": "planned"
                    },
                    {
                      "id": "f-policy-shipping",
                      "name": "Shipping",
                      "zh": "配送政策",
                      "status": "done",
                      "decor": "planned"
                    }
                  ],
                  "decor": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "gift-card",
          "title": "Gift card（礼品卡）",
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-gift-card",
                  "name": "Gift card",
                  "zh": "礼品卡",
                  "status": "planned",
                  "note": "Shopify 路径 /gift_cards/{id}。顾客打开获赠礼品卡的页面。原型还没有，先占位。",
                  "decor": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "password",
          "title": "Password（密码页）",
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-store-password",
                  "name": "Password",
                  "zh": "店铺密码页",
                  "status": "done",
                  "note": "Shopify 路径 /password。店铺未公开时的落地页。原型还没有，先占位。",
                  "decor": "planned"
                }
              ]
            }
          ]
        },
        {
          "id": "not-found",
          "title": "404（未找到）",
          "groups": [
            {
              "title": "二级路径",
              "items": [
                {
                  "id": "f-404",
                  "name": "404",
                  "zh": "未找到",
                  "status": "done",
                  "note": "无效地址时的页面。原型还没有，先占位。",
                  "decor": "planned"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
