import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as codecommit from 'aws-cdk-lib/aws-codecommit';
import { CodePipeline, CodePipelineSource, CodeBuildStep, ShellStep } from 'aws-cdk-lib/pipelines';



export class CdkPipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Creates a CodeCommit repository called 'CdkRepo'
    new codecommit.Repository(this, 'CdkRepo', {
      repositoryName: "CdkRepo"
  });

    // The basic pipeline declaration. This sets the initial structure
    // of our pipeline
  //   const pipeline = new CodePipeline(this, 'Pipeline', {
  //     pipelineName: 'WorkshopPipeline',
  //     synth: new CodeBuildStep('SynthStep', {
  //             input: CodePipelineSource.codeCommit(repo, 'main'),
  //             installCommands: [
  //                 'npm install -g aws-cdk'
  //             ],
  //             commands: [
  //                 'npm ci',
  //                 'npm run build',
  //                 'npx cdk synth'
  //             ]
  //         }
  //     )
  // });

    // const pipeline = new CodePipeline(this, 'Pipeline', {
    //   pipelineName: 'CdkPipeline',
    //   synth: new ShellStep('Synth', {
    //     input: CodePipelineSource.gitHub('cnedang/cdk-pipeline.git', 'main'),
    //     commands: ['npm ci', 'npm run build', 'npx cdk synth']
    //   })
    // });
  }
}