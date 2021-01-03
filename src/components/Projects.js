import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import ShopIcon from '@material-ui/icons/Shop';

import { CommonLoading } from 'react-loadingg';

import StyledIcon from './StyledIcon';
import TimeLine from './TimeLine';
import SlideViewer from './SlideViewer';
import animation from 'css/animation';

const OutContainer = styled.section`
    z-index: 1;
    position: relative;
    min-height: 400px;
    padding: 30px 0 80px 0;
    background-color: #121E26; 
    text-align: center;
`;

const InContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin: 25px auto;
    line-height: 1.0;
`;

const Header = styled.h1`
    margin: 0 auto;
    letter-spacing: 2px;
    color: #fafafa;
    
    @media (min-width: 1281px) {
        font-size: 40px;
    }
      
    @media (min-width: 768px) and (max-width: 1280px) {
        font-size: 36px;
    }
    
    @media (min-width: 320px) and (max-width: 767px) {
        font-size: 32px;
    }
`;

const HeaderBar = styled.hr`
    width: 70px;
    height: 3px;
    border: 0;
    background-color: #fafafa;
`;

const Loading = styled.div`
    margin: 80px auto;
`;

class Projects extends PureComponent {    
    state = { 
        projects: [],
        done: false
    }

    getProjectInfo() {
        return fetch('data/projects.json')
            .then(response => {
                if(!response.ok) {
                    throw new Error("error code: " + response.status);
                }
                
                return response.json();
            })
            .catch((err) => console.log(err));
    }
    
    componentDidMount() {
        this.getProjectInfo()
            .then(data => {
                this.setState({ 
                    projects: data.projects,
                    done: true 
                });
            });
    }

    render() {
        return (
            <OutContainer id="projects">
                <Header>Projects.</Header>
                <HeaderBar/>
                <InContainer>
                    { !this.state.done ? ( 
                        <Loading>
                            <CommonLoading size="large"/>
                        </Loading>
                    ) :
                        <TimeLine>
                            {this.state.projects.map((project, key) => 
                                <Project {...project} key={key}/>)
                            }
                        </TimeLine>
                    }
                </InContainer>
            </OutContainer>
        );
    }
};

const Content = styled.div`
    display: inline-block;
    position: relative;
    margin: 3px;
    width: 26vw;
    height: 19vw;
    cursor: pointer;
    overflow: hidden;
    
`;

const Thumbnail = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backgrounD-color: #f2f2f2;
    background-image: url('${props => props.src}');
    background-size: cover;
    transition: transform 0.3s;
    ${props => props.hover ? "transform: scale(1.05)" : null }
`;

const Preview = styled.div`
    ${props=> props.hover ? '' : 'display: none;'}
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(50, 50, 50, 0.6);
    color: white;
    animation: ${animation.fadeIn} 0.5s forwards;
    align-items: center;
`;

const PreviewTitle = styled.div`
    margin-top: 5.5vw;
    font-size: 1.5vw;
    font-weight: bold;
`;

const PreviewDescription = styled.div`    
    margin: 25px auto;
    width: 15vw;
    font-size: 1vw;
    line-height: 1.8;
`;

const DetailViewContent = styled.div`
    display: flex;
    overflow: auto;
        
    @media (max-width: 1281px) {
        display: block;
    }
`;

const DetailViewSummary = styled(DialogContent)`
    font-family: inherit;
    color: #121E26;

    @media (min-width: 1281px) {
        width: 575px;
        
        &::-webkit-scrollbar {
            width: 13px;
        }    
    }
      
    @media (min-width: 768px) and (max-width: 1280px) {
        width: 602px;
        height: 280px;

        &::-webkit-scrollbar {
            width: 10px;
        }    
    }
    
    @media (min-width: 500px) and (max-width: 767px) {
        width: 452px;
        height: 280px;
        
        &::-webkit-scrollbar {
            width: 8px;
        }    
    }
    
    @media (min-width: 320px) and (max-width: 500px) {
        width: 232px;
        height: 230px;
        
        &::-webkit-scrollbar {
            width: 7px;
        }    
    }
`;

const DetailViewHeader = styled.header`
    margin-bottom: 0.75vw;
    border-bottom: 2px solid #121E26;
`;

const DetailViewMain = styled.div`
    line-height: 1.8;
    overflow: auto;
    border-bottom: 2px solid #121E26;
    padding-bottom: 0.75vw;

    @media (min-width: 1281px) {
        font-size: 17px;
        height: 400px;
        padding-right: 10px;

        &::-webkit-scrollbar {
            width: 13px;
        }    
    }
      
    @media (min-width: 768px) and (max-width: 1280px) {
        font-size: 13px;
    }
    
    @media (min-width: 320px) and (max-width: 767px) {
        font-size: 7px;
    }
`;

const DetailViewFooter = styled.footer`
    position: relative;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
`;

const LinkIcon = styled.a`
    margin: 10px 10px 0px 10px;
    text-decoration: none;
    transition: all .2s ease-in-out;
    color: #121E26;
    :hover {
        color: #B4D2D9;
        transform: scale(1.05);
    }       
`;

const headerStyle = `
    margin: 0.7vw 0 0.7vw 0;
    font-weight: bold
`

const DetailViewTitle = styled.div`
    ${headerStyle}
    
    @media (min-width: 1281px) {
        font-size: 21px;
    }
      
    @media (min-width: 768px) and (max-width: 1280px) {
        font-size: 17px;
    }
    
    @media (min-width: 320px) and (max-width: 767px) {
        font-size: 11px;
    }
`;

const DetailViewSubTitle = styled.div`
    ${headerStyle}

    @media (min-width: 1281px) {
        font-size: 17px;
    }
      
    @media (min-width: 768px) and (max-width: 1280px) {
        font-size: 13px;
    }
    
    @media (min-width: 320px) and (max-width: 767px) {
        font-size: 7px;
    }
`;

class Project extends PureComponent {
    constructor(props) {
        super(props);

        this.thumbnail = "";
        if(props.thumbnail !== "") { 
            this.thumbnail = require(`resources/projects/${props.thumbnail}`);
        }

        this.images = [];
        if(props.images.length !== 0) {
            this.images = props.images.map(image => require(`resources/projects/${image}`));
        }

        this.state = { 
            enablePreview: false,
            enableDetailView: false,
        };
    }

    handleMouseEnter = (event) => {
        this.setState({ enablePreview: true });
    }

    handleMouseLeave = (event) => {
        this.setState({ enablePreview: false });
    }

    handleClick = (event) => {
        this.setState({ enableDetailView: true, enablePreview: false });
    }

    closeDetailView =() => {
        this.setState({ enableDetailView: false });
    }

    render() {
        const { 
            title, 
            role,
            technics,
            platform,
            terms,
            subTitle, 
            videoUrl, 
            githubUrl, 
            webSiteUrl, 
            storeUrl,
            description 
        } = this.props;

        const video = videoUrl !== "" ? <iframe title={title} src={videoUrl + '?rel=0'} frameBorder="0" key={title}/> : null;
        let slideList = this.images.map((image, key) => { 
            return <img src={image} key={key} alt="project"/>
        });
        slideList.unshift(video)

        const urlIcons = [ {
                url: githubUrl,
                icon: <StyledIcon component={GitHubIcon}/>
            }, {
                url: webSiteUrl,
                icon: <StyledIcon component={LaunchIcon}/>
            }, {
                url: storeUrl,
                icon: <StyledIcon component={ShopIcon}/>
            }
        ]

        const detailView = (
            <Dialog 
                onClose={this.closeDetailView} 
                open={this.state.enableDetailView} 
                maxWidth={false}
            >
                <DetailViewContent>
                    <SlideViewer>
                        {slideList}
                    </SlideViewer>
                    <DetailViewSummary className=".MuiDialogContent-dividers">
                        <DetailViewHeader>
                            <DetailViewTitle>{title}</DetailViewTitle>
                            <DetailViewSubTitle>Role: {role}</DetailViewSubTitle>
                            <DetailViewSubTitle>Tech: {technics}</DetailViewSubTitle>
                            <DetailViewSubTitle>Platform: {platform}</DetailViewSubTitle>
                            <DetailViewSubTitle>Terms: {terms}</DetailViewSubTitle>
                        </DetailViewHeader>
                        <DetailViewMain>
                            {description.map((text, key) => {
                                return (
                                    <div key={key}>
                                        {text}
                                        <br/>
                                    </div>
                                );
                            })}
                        </DetailViewMain>
                        <DetailViewFooter>
                            { urlIcons.map((urlIcon, key) => {
                                if(urlIcon.url === "") return null;    
                                
                                return (
                                    <LinkIcon href={urlIcon.url} target="blank" key={key}>
                                        {urlIcon.icon}
                                    </LinkIcon>
                                );
                            })}                            
                        </DetailViewFooter> 
                    </DetailViewSummary>
                </DetailViewContent>
            </Dialog>
        );

        return(
            <Content onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <Thumbnail src={this.thumbnail} hover={this.state.enablePreview} onClick={this.handleClick}/>
                <Preview hover={this.state.enablePreview}
                    onClick={this.handleClick}
                    onMouseLeave={this.handleMouseLeave}
                >
                    <PreviewTitle>{title}</PreviewTitle>
                    <PreviewDescription>{subTitle}</PreviewDescription>
                </Preview>
                { this.state.enableDetailView ? detailView : null }
            </Content>
        )
    }
}

Project.defaultProps = {
    title: "",
    subTitle: "",
    thumbnail: "",
    videoUrl: "",
    images: [],
    description: ""
};

export default Projects;