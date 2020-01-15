import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import ShopIcon from '@material-ui/icons/Shop';

import { CommonLoading } from 'react-loadingg';

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
    max-width: 1000px;
    height: auto;
    margin: 25px auto;
    line-height: 1.0;
`;

const Header = styled.h1`
    margin: 0 auto;
    font-size: 40px;
    letter-spacing: 2px;
    color: #fafafa;
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
            .catch((err) => {
                console.log(err);
            });
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
                <Header>Works.</Header>
                <HeaderBar/>
                <InContainer>
                    { !this.state.done ? ( 
                        <Loading>
                            <CommonLoading size="large"/>
                        </Loading>
                    ) : this.state.projects.map((project, key) => (<Project {...project} key={key}/>)) }
                </InContainer>
            </OutContainer>
        );
    }
};

const Content = styled.div`
    display: inline-block;
    position: relative;
    margin: 3px;
    width: 480px;
    height: 360px;
    cursor: pointer;
    overflow: hidden;
`;

const Thumbnail = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('${props => props.src}');
    background-size: cover;
    transition: transform 0.3s;
    ${props => props.hover ? "transform: scale(1.05)" : null }
`;

const Preview = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(50, 50, 50, 0.6);
    color: white;
    animation: ${animation.fadeIn} 0.5s forwards;
    align-items: center;
`;

const PreviewTitle = styled.div`
    margin-top: 110px;
    font-size: 30px;
    font-weight: bold;
`;

const PreviewDescription = styled.div`    
    margin: 25px auto;
    width: 300px;
    font-size: 20px;
    line-height: 1.8;
`;

const DetailViewContent = styled.div`
    display: flex;
`;

const DetailViewSummary = styled(DialogContent)`
    font-family: inherit;
    color: #121E26;
`;

const DetailViewHeader = styled.header`
    border-bottom: 2px solid #121E26;
`;

const DetailViewMain = styled.p`
    width: 380px;
    line-height: 1.8;
`;

const DetailViewFooter = styled.footer`
    display: flex;
    position: absolute;
    right: 0;
    bottom: 0;
    margin: 20px;
`;

const LinkIcon = styled.a`
    margin: 0px 10px 0px 10px;
    text-decoration: none;
    transition: all .2s ease-in-out;
    color: #121E26;
    :hover {
        color: #B4D2D9;
        transform: scale(1.05);
    }       
`;

class Project extends PureComponent {
    constructor(props) {
        super(props);

        this.thumbnail = "";
        this.images = [];

        if(props.thumbnail !== "") { 
            this.thumbnail = require(`resources/${props.thumbnail}.jpg`);
        }
        if(props.images.length !== 0) {
            this.images = props.images.map(image => require(`resources/${image}.jpg`));
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
        const { title, subTitle, videoUrl, githubUrl, webSiteUrl, storeUrl, description } = this.props;

        const preview = (
             <Preview hover={this.state.enablePreview}
                    onClick={this.handleClick} 
                    onMouseLeave={this.handleMouseLeave}>
                <PreviewTitle>{title}</PreviewTitle>
                <PreviewDescription>{subTitle}</PreviewDescription>
            </Preview>
        );

        const video = videoUrl !== "" ? <iframe title={title} src={videoUrl + '?rel=0'} frameBorder="0" key={title}/> : null;
        const screenshot = this.images.map((image, key) => ( 
                <img src={image} key={key} alt="none"/>)
            );

        let slideList = [ video ];
        slideList = slideList.concat(screenshot);

        const urlIcons = [
            {
                url: githubUrl,
                icon: <GitHubIcon fontSize="large"/>
            },
            {
                url: webSiteUrl,
                icon: <LaunchIcon fontSize="large"/>
            },
            {
                url: storeUrl,
                icon: <ShopIcon fontSize="large"/>
            }
        ]

        const detailView = (
            <Dialog onClose={this.closeDetailView} open={this.state.enableDetailView} maxWidth="lg">
                <DetailViewContent>
                    <SlideViewer width={700} height={525}>
                        {slideList}
                    </SlideViewer>
                    <DetailViewSummary>
                        <DetailViewHeader>
                            <h2>{title}</h2>
                            <h3>Role: UI Development</h3>
                            <h3>Tech: React.js</h3>
                        </DetailViewHeader>
                        <DetailViewMain>{description}</DetailViewMain>
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
                <Thumbnail src={this.thumbnail} hover={this.state.enablePreview}/>
                { this.state.enablePreview ? preview : null }
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