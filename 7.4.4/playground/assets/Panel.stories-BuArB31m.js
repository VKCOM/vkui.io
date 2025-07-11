import{b as d,h as o,r as C,j as e,V as P,P as n}from"./iframe-DDos8QSD.js";import{D as f,C as x}from"./constants-DdkjnEgz.js";import{c as v}from"./createStoryParameters-CcwS40kl.js";import{A as a}from"./Avatar-D7U-bWyu.js";import{C as t}from"./Cell-BSHLTF6a.js";import{G as l}from"./Group-BdSAzhLh.js";import{P as s}from"./PanelHeaderBack-Bk_5Z1wj.js";import{S as h}from"./Search-DaKeo1B-.js";import{S as j}from"./Spinner-DXID7UE1.js";import{I as b}from"./user_outline_28-ARON33zI.js";import{I as k}from"./users_outline_28-DE0wlIY7.js";import{I as A}from"./music_outline_28-DMEGZLuV.js";import"./ImageBase-DfIHrg5j.js";import"./Clickable-CWxsm2KA.js";import"./mergeCalls-Bc-HqyI0.js";import"./callMultiple-ChqatQlo.js";import"./type_checkers-CVMjkZjG.js";import"./ImageBaseBadge-duB4zrMc.js";import"./useColorScheme-DqjxLW2f.js";import"./InputUtils-Dyyzogrc.js";import"./useFocusWithin-Cy7ZAR8z.js";import"./useIsClient-CKD-xsUI.js";import"./useConfigDirection-BVLc7CyO.js";import"./online_mobile_12-Ct9KWEFO.js";import"./_object_spread_props-DRD4qu7p.js";import"./SvgIconRoot-D7q7mL8J.js";import"./helpers-QklJbEbU.js";import"./Removable-BkLTzKdK.js";import"./children-DM03Xori.js";import"./IconButton-C3mRDxD7.js";import"./Tappable-B0kWxOOO.js";import"./VisuallyHidden-Bn0ixRRD.js";import"./useGlobalEventListener-Cf-K_pnj.js";import"./useEventListener-B5lUY6Nx.js";import"./cancel_24-Cjk92GYx.js";import"./SimpleCell-Cm4X46Km.js";import"./react_utils-CSZjvU4X.js";import"./Footnote-DolN14Rp.js";import"./Headline-A5M31mJl.js";import"./Subhead-94kqPIfE.js";import"./chevron_compact_right_24-D96aA4-p.js";import"./chevron_16-B5_cuzjH.js";import"./AdaptiveIconRenderer-5tHQMFAk.js";import"./reorder_ios_24-DnZbFoSd.js";import"./check_box_on_24-Wmpe4q9b.js";import"./check_circle_on_24-BFTGWo1k.js";import"./constants-CtEIZ0Vq.js";import"./PanelHeaderButton-DNA82Xqx.js";import"./Title-Ble1sAc3.js";import"./chevron_left_outline_28-nrUKiKB0.js";import"./chevron_left_outline_20-C-_aw8Re.js";import"./useBooleanState-BPdqgwEs.js";import"./useNativeFormResetListener-q-APSa1c.js";import"./Button-Ky5QsFrC.js";import"./clear_16-IEFZOITA.js";import"./search_outline_16-BZN3qCIc.js";import"./animationVisibilityDelay.module-DjZYURHD.js";const ge={title:"Layout/Panel",component:o,parameters:v("Panel",x,f),decorators:[d]},i={render:function(){const[u,r]=C.useState("panel1");return e.jsxs(P,{activePanel:u,children:[e.jsxs(o,{id:"panel1",children:[e.jsx(n,{children:"More"}),e.jsxs(l,{children:[e.jsx(t,{chevron:"auto",before:e.jsx(b,{}),onClick:()=>r("panel2"),children:"Friends"}),e.jsx(t,{chevron:"auto",before:e.jsx(k,{}),onClick:()=>r("panel2"),children:"Communities"}),e.jsx(t,{chevron:"auto",before:e.jsx(A,{}),onClick:()=>r("panel2"),children:"Music"})]})]}),e.jsxs(o,{id:"panel2",children:[e.jsx(n,{delimiter:"spacing",before:e.jsx(s,{onClick:()=>r("panel1")}),children:"Communities"}),e.jsxs(l,{children:[e.jsx(h,{}),e.jsx(t,{subtitle:"Humor",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Swipe Right"}),e.jsx(t,{subtitle:"Cultural Center",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"Out Cinema"}),e.jsx(t,{subtitle:"Movies",before:e.jsx(a,{}),onClick:()=>r("panel3"),children:"#ARTPOKAZ"})]})]}),e.jsxs(o,{id:"panel3",centered:!0,children:[e.jsx(n,{before:e.jsx(s,{onClick:()=>r("panel2")}),children:"Out Cinema"}),e.jsx(j,{}),e.jsx("div",{style:{marginTop:10},children:"Centered Content"})]})]})}};var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: function Render() {
    const [activePanel, setActivePanel] = React.useState('panel1');
    return <View activePanel={activePanel}>
        <Panel id="panel1">
          <PanelHeader>More</PanelHeader>
          <Group>
            <Cell chevron="auto" before={<Icon28UserOutline />} onClick={() => setActivePanel('panel2')}>
              Friends
            </Cell>
            <Cell chevron="auto" before={<Icon28UsersOutline />} onClick={() => setActivePanel('panel2')}>
              Communities
            </Cell>
            <Cell chevron="auto" before={<Icon28MusicOutline />} onClick={() => setActivePanel('panel2')}>
              Music
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel2">
          <PanelHeader delimiter="spacing" before={<PanelHeaderBack onClick={() => setActivePanel('panel1')} />}>
            Communities
          </PanelHeader>
          <Group>
            <Search />
            <Cell subtitle="Humor" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              Swipe Right
            </Cell>
            <Cell subtitle="Cultural Center" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              Out Cinema
            </Cell>
            <Cell subtitle="Movies" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
              #ARTPOKAZ
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel3" centered>
          <PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('panel2')} />}>
            Out Cinema
          </PanelHeader>
          <Spinner />
          <div style={{
          marginTop: 10
        }}>Centered Content</div>
        </Panel>
      </View>;
  }
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ye=["Playground"];export{i as Playground,ye as __namedExportsOrder,ge as default};
