import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Fade from 'react-reveal/Fade';

import List from './List';
import FillingIcon from './FillingIcon';

import CheckIcon from '@material-ui/icons/Check';

const Container = styled.section`
    z-index: 1;
    position: relative;
    line-height: 1.8;
    min-height: 400px;
    padding: 65px 0 40px 0;
    text-align: center;
    color: #121E26;
    display: flow-root;
`;

const Header = styled.h1`
    margin: 0 auto;
    font-size: 2vw;
    letter-spacing: 2px;
`;

const HeaderBar = styled.hr`
    width: 70px;
    height: 3px;
    border: 0;
    background-color: #121E26;
`;

const articleStyle = `
    margin-bottom: 120px;
`;

const LeftArticle = styled.article` 
    ${articleStyle}
    text-align: left;
    padding-left: 10vw;
`;

const RightArticle = styled.article`
    ${articleStyle} 
    text-align: right;
    padding-right: 10vw;
`;

const SubHeader = styled.h1`
    font-size: 1.8vw;
    margin-top: 45px;
    margin-bottom: 10px;
`; 

const SubArticle = styled.article`
    font-size: 1vw;
    margin-bottom: 60px;
`;

const Title = styled.div`
    font-size: 1.1em;
    font-weight: 800;
`;

const TitleIcon = styled(CheckIcon)`
    position: relative;
    top: 4px;
    margin-right: 10px;
`;

const Description = styled.div`
    width: 21.25vw;
    margin-left: 34px;
`;

class AboutMe extends PureComponent {
    render() {
        return (
            <Container id="about">
                <Header>About Me.</Header>
                <HeaderBar/>
                <Fade right duration={1400}>
                    <RightArticle>
                            <SubHeader>
                                반갑습니다!<br />
                                저는 게임을 좋아하는<br />
                                개발자입니다.
                        </SubHeader>
                    </RightArticle>
                </Fade>
                <Fade left duration={1400} delay={500}>
                    <LeftArticle>
                        <SubHeader>저는 말이죠,</SubHeader>
                        <SubArticle>
                            안녕하세요. 프로그래머 <b>이준영</b>입니다.<br/>
                            C++, C#, JS 등을 자유롭게 사용하며 다양한 프로젝트를 개발하고 있습니다.<br/><br/>
                            
                            게임을 좋아하고 만들어보고 싶었기에 프로그래밍을 시작했습니다.<br/>
                            그래서, 좋아하고 하고싶었던만큼 즐기면서 개발하고 있습니다.<br/>
                            일이란 <b>'해야한다'</b>보다는 <b>'하고싶다'</b>라는 마음이 중요하다고 생각합니다.<br/>
                            <b>'해야한다'</b>라는 의무감을 가지게 되는 순간, 즐거움보단 압박감이 앞서게 됩니다.<br/>
                            하고싶은 일이라면 즐기게 되고, 더 잘하고 싶어지면서 일을 좋아하게 되는 것 같습니다.<br/>
                            그렇게 즐기다보면 저만의 철학이, 정성이 담긴 작품이 만들어지는 것 같습니다.<br/><br/>
                            
                            누군가 제가 만든 작품으로 감동을 느낄 수 있는, <br/>
                            개발자의 깊은 고민과 정성이 담긴, 그런 작품을 만들고 싶습니다. 
                        </SubArticle>
                    </LeftArticle>
                </Fade>   
                <Fade right duration={1400} delay={700}>
                    <RightArticle>
                            <SubHeader>처음과 같은 뜨거운 열정으로</SubHeader>
                            <SubArticle>
                                열정이란, 무언가를 얼마나 좋아하는지 나타낸다고 생각합니다.<br/>
                                열정이 없는 일은, 머지않아 목적을 잃어 지쳐버릴 겁니다.<br/>
                                하지만, 모든 일에 열정을 담아 일하는 것은 어렵습니다.<br/>
                                그래서, 개발하면서 어떻게하면 재밌게 열정을 담아 만들 수 있을까 고민하며<br/>
                                처음과 같은 열정을 잃지 않도록 노력하고 있습니다.    
                            </SubArticle>
                            <SubHeader>새로움을 추구하는 호기심으로</SubHeader>
                            <SubArticle>
                                새로움이란 그저 기존에 없던 무언가를 말하는 것은 아닙니다.<br/>
                                내가 알지 못했던 것, 원래 있던 것보다 더 나은 무언가를 말합니다.<br/>
                                오래된 코드를 좀 더 좋은 방식으로 개선하는 것도 새로운 것이니까요.<br/>
                                새로운 것이 두려워 오래된 방식만을 고집하다보면 발전하지 못할 겁니다.<br/>
                                고여있는 물이 아닌 잔잔하게 흐르는 강물이 되고 싶습니다.<br/>
                            </SubArticle>                    
                            <SubHeader>포기하지 않고 끊임없이 도전하는</SubHeader>
                            <SubArticle>
                                적지 않은 시간동안 많은 것을 보고, 경험했습니다.<br/>
                                매번 새로운 문제들이 앞을 가로막고, 때로는 좌절하기도 했습니다.<br/>
                                하지만, 좌절하여 멈춰 있는 것이 아니라 문제가 무엇이고,<br/>
                                왜 실패한 것인지 분석하고 고민하여 해결하고자 합니다. <br/>
                                만약, 제 능력으로는 해결할 수 없는 문제라면 망설이지 않고 도움을 청할겁니다.<br/> 
                                다만, 그저 도움을 받는 것이 아니라 그 도움을 내 것으로 만들고<br/>
                                앞으로의 비슷한 상황이 생겼을 때 해결하고자 합니다.<br/>
                                무언가를 개발한다는 것은 혼자가 아니라 함께 만들어 가는 것이니까요.
                            </SubArticle>
                    </RightArticle>         
                </Fade>   
                <Fade bottom duration={1400}>
                    <LeftArticle>                    
                        <SubHeader>제가 잘하는 건요,</SubHeader>
                        <List spacing="22.5vw">
                            <SubArticle>
                                <SubArticle>
                                    <Title>
                                        <TitleIcon/>
                                        Readable Code
                                    </Title>
                                    <Description>
                                        유지보수는 물론, 다른 팀원과의 작업을 위해
                                        가독성을 고민하며 코드를 작성합니다.
                                    </Description>
                                </SubArticle>
                                <SubArticle>
                                    <Title>
                                        <TitleIcon/>
                                        Planning
                                    </Title>
                                    <Description>
                                        작업하기 전 계획하는 것을 좋아합니다.<br/>
                                        무엇을 해야할지 명확해지기 때문에 항상 계획합니다.
                                    </Description>
                                </SubArticle>
                                <SubArticle>
                                    <Title>
                                        <TitleIcon/>
                                        Game-Friendly
                                    </Title>
                                    <Description>
                                        게임을 좋아하는 마음으로 즐기면서 개발합니다.                                        
                                    </Description>
                                </SubArticle>
                                <SubArticle>
                                    <Title>
                                        <TitleIcon />
                                        Co-Work
                                    </Title>
                                    <Description>
                                        소모임 활동과 다양한 협업 프로젝트 경험을 바탕으로
                                        팀원과 의사소통을 우선시 합니다.
                                    </Description>
                                </SubArticle>
                            </SubArticle>
                            <SubArticle>
                                <List category="Language" spacing="15px">
                                    <FillingIcon text="C/C++" fillAmount={0.5}/>
                                    <FillingIcon text="C#" fillAmount={0.5}/>
                                    <FillingIcon text="JS" fillAmount={0.5}/>
                                    <FillingIcon text="Python" fillAmount={0.3}/>
                                </List>
                                <List category="Engine" spacing="15px">
                                    <FillingIcon text="Unity" fillAmount={0.5}/>
                                    <FillingIcon text="DirectX" fillAmount={0.3}/>
                                </List>
                                <List category="Web" spacing="15px">
                                    <FillingIcon text="Node.js" fillAmount={0.5}/>
                                    <FillingIcon text="React.js" fillAmount={0.5}/>
                                </List>
                                <List category="Database" spacing="15px">
                                    <FillingIcon text="MSSQL"fillAmount={0.4}/>
                                    <FillingIcon text="MongoDB" fillAmount={0.3}/>
                                </List>
                            </SubArticle>
                        </List>
                    </LeftArticle>             
                </Fade>   
            </Container>
        );
    }
};

export default AboutMe;